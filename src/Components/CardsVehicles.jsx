import { Link } from "react-router-dom";

function CardsVehicles({ vehicle }) {
    /* console.log("In CardsVehicles", vehicle) */
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="card my-2" style={{ backgroundColor: "#474747" }} >
                    <img
                        src={vehicle.img}
                        className="card-img-top img-fluid" alt={vehicle.name}
                        style={{ objectFit: 'contain', height: "400px" }}
                    />
                    <div className="card-body" >
                        <h5 className="card-title">{vehicle.name} </h5>
                        <p className="card-text" style={{ fontFamily: "Times" }}>
                            UID: {vehicle.uid}<br />
                        </p>
                        <div className="buttons">
                            <Link to={`/details_vehicles/${vehicle.uid}`}>
                                <button >
                                    profile
                                </button>
                            </Link>
                            <button>
                                <i className="bi bi-star"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsVehicles;