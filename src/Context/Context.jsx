import {createContext,useState ,useContext, useEffect } from "react";
import axios from "axios";
import{v4 as uuid} from 'uuid'


const FunctionContext = createContext(null);

let URL = "https://swapi.dev/api/people/?page=1";

let imgBase = "https://starwars-visualguide.com/assets/img/characters";


const FunctionProvider = ({children}) => {
    //states
    const [data, setData] = useState([]);

    const fetchData =  async () =>  {
        try{
            let response = await axios.get(URL);
            response= response.data;
            response = response.results.map((el, i)=>{
                let img = `${imgBase}/${i+1}.jpg`
                let id = uuid()
                return {...el,img, id}
            })
            /* console.log(response); */
            setData(response); /* .results or normal */
        }catch(err){
            console.error(err);
        }
    
    
}

    //All Fuctions
    


return (
    <FunctionContext.Provider value={{data,setData,fetchData}}>
        {children}
    </FunctionContext.Provider>
)
};

export {FunctionContext,FunctionProvider};