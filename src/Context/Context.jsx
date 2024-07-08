import { createContext, useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid'


const FunctionContext = createContext(null);

const URL = "https://swapi.dev/api/people/?page=1";
const URL_planets = "https://www.swapi.tech/api/planets";
const URL_vehicles = "https://www.swapi.tech/api/vehicles";
//Images URls
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let imgPlanets = "https://starwars-visualguide.com/assets/img/planets";
let imgVehicles = "https://starwars-visualguide.com/assets/img/vehicles";


const FunctionProvider = ({ children }) => {
    //states
    const [data, setData] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    //For Favorites
    /* const [favorites,setFavorites]=useState([]); */
    const [favorites, dispatch] = useReducer(favoritesReducer,  []);
    //Test

   

    const fetchData = async () => {
        try {
            let response = await axios.get(URL);
            response = response.data;
            response = response.results.map((el, i) => {
                let img = `${imgBase}/${i + 1}.jpg`
                let id = uuid()
                return { ...el, img, id }
            })
            /* console.log(response); */
            setData(response); /* .results or normal */
        } catch (err) {
            console.error(err);
        }


    }
    //Fetch Planets
    const fetchDataPlanets = async () => {
        try {
            let response = await axios.get(URL_planets);
            let planets = response.data.results;

            // Function to fetch detailed information for a single planet
            const fetchPlanetDetails = async (planet) => {
                try {
                    let detailedResponse = await axios.get(`https://www.swapi.tech/api/planets/${planet.uid}`);
                    let detailedInfo = detailedResponse.data.result.properties; // Adjust this according to the structure of the response
                    return { ...planet, detailedInfo };
                } catch (error) {
                    console.error(`Error fetching details for planet ${planet.uid}:`, error);
                    // return planet; // Return the planet object without detailed info in case of an error
                }
            };

            // Array to hold all promises for fetching detailed information
            let fetchPromises = planets.map(fetchPlanetDetails);

            // Resolve all promises to get detailed planet information
            let detailedPlanets = await Promise.all(fetchPromises);

            // Map through detailed planets to add img and id
            detailedPlanets = detailedPlanets.map((planet, i) => ({
                ...planet,
                img: `${imgPlanets}/${i + 2}.jpg`,
                id: uuid()
            }));

            // Set the state with the updated planets array
            setPlanets(detailedPlanets);

        } catch (err) {
            console.error('Error fetching planets:', err);
        }
    };

    //Fetch Vehicles
    const fetchDataVehicles = async () => {
        try {
            let response = await axios.get(URL_vehicles);
            response = response.data;
            response = response.results.map((el, i) => {
                let img = `${imgVehicles}/${el.uid}.jpg`
                let id = uuid()
                return { ...el, img, id }
            })
            /* console.log(response); */
            setVehicles(response);
        } catch (err) {
            console.error(err);
        }
    }
    //Reducer Try
    function favoritesReducer(favorites, action) {
        switch (action.type) {
            case "add": {
                const newFavorite = action.payload;

                if (favorites.includes(newFavorite)) {
                    return favorites
                }
                return [
                    ...favorites,
                    newFavorite
                ]
            }

            case "delete": {
                const filteredFavorites = favorites.filter(item => item.name !== action.payload.name);
                return filteredFavorites
            }
            default:
                return favorites;
        }
    };
    //Favorite Related
    function handleAdd(person) {
        dispatch({
            type: "add",
            payload: person
        });
    };

    function handleDelete(person) {
        dispatch({
            type: "delete",
            payload: person
        });
        
    };


    return (
        <FunctionContext.Provider value={{ data, setData, fetchData, planets, setPlanets, fetchDataPlanets, vehicles, setVehicles, fetchDataVehicles, favorites, favoritesReducer, dispatch, handleAdd, handleDelete }}>
            {children}
        </FunctionContext.Provider>
    )
};

export { FunctionContext, FunctionProvider };