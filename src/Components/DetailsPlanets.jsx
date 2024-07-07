import Footer from "./Footer";
import { useContext } from "react";
import { FunctionContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DetailsPlanets() {
    const { planets } = useContext(FunctionContext);
    const { id } = useParams();
    let planet = planet.filter((el) => {
        return el.id === id;
    })[0];
    return (
        <>
            <div className="row d-flex align-items-center">
            <div className="col-4">
                <img src={actor.img} />
            </div>
            <div className="col-8 align-self-center">
                <h2>{actor.name}</h2>
                <p>
                Born: {actor.birth_year}
                <br />
                Gender: {actor.gender}
                <br />
                Height: {actor.height} cm
                <br />
                Mass: {actor.mass} kg
                <br />
                Hair Color: {actor.hair_color}
                <br />
                Skin Color: {actor.skin_color}
                <br />
                Eye Color: {actor.eye_color}
                <br />
                Homeworld:{" "}
                <a href={actor.homeworld}           target="_blank" rel="noopener noreferrer">
                    {actor.homeworld}
                </a>
                </p>
                <p>
                {actor.name} is known for {actor.films.length} films:
                <ul>
                    {actor.films.map((film, index) => (
                        <li key={index}>
                            <a href={film} target="_blank" rel="noopener noreferrer">
                            {film}
                            </a>
                        </li>
                ))}
                </ul>
                </p>
                <p>
                    {actor.name} has {actor.vehicles.length} vehicles and{" "}
                    {actor.starships.length} starships.
                </p>
                <p>
                    More about {actor.name}:{" "}
                    <a href={actor.url} target="_blank" rel="noopener noreferrer">
                    {actor.url}
                </a>
                </p>
            </div>
                <div className="col d-felx text-end mx-3">
                    <Link to={'/'}>
                    <button>
                        Get Back Home<i class="bi bi-arrow-return-left"></i>
                    </button>
                    </Link>
                </div>
                <div className="col d-felx text-end mx-3">
                    <Link to={'/'}>
                        <button>
                            Get Back Home<i class="bi bi-arrow-return-left"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetailsPlanets;
