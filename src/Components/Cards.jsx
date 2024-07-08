import { Link } from "react-router-dom";
import { FunctionContext } from "../Context/Context";
import { useContext, useReducer } from "react";
function Cards({ actor }) {

    const { handleAdd, handleDelete } = useContext(FunctionContext);
    // console.log(handleAdd);

    return (
        <>
            <div className="col-md-4 col-sm-6 ">
                <div className="card my-2 rounded" style={{ backgroundColor: "#474747" }}>
                    <img
                        src={actor.img}
                        className="card-img-top img-fluid" alt={actor.name}
                        style={{ objectFit: 'contain', height: "400px" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{actor.name} </h5>

                        <p className="card-text">
                            Gender: {actor.gender}<br />
                            Height: {actor.height}<br />
                            Mass: {actor.mass}<br />
                            Eye Color: {actor.eye_color}<br />
                            Hair Color: {actor.hair_color}<br />
                        </p>
                        <div className="buttons">
                            <Link to={`/details/${actor.id}`}>
                                <button >
                                    profile

                                </button>
                            </Link>
                            <button
                                onClick={() => handleAdd(actor)}   //likethis ? do i need to import reducer?
                                // onClick2={() => handleDelete(actor)} //Multiple caracters
                            >
                                <i className="bi bi-star"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;