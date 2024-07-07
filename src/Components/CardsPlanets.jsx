import { Link } from "react-router-dom";
function CardsPlanets({planet}) {
    return ( 
        <>
            <div className="col-md-4 col-sm-6">
                <div className="card my-2">
                    <img
                        src={planet.img} 
                        className="card-img-top img-fluid" alt={planet.name}
                        style={{ objectFit: 'contain',height:"400px" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name} </h5>
                        
                        <p className="card-text fs-5" style={{fontFamily:"Times"}}>
                            Climate: {planet.detailedInfo.climate}<br/>
                            
                            Diameter: {planet.detailedInfo.diameter}<br/>
                            Population: {planet.detailedInfo.population}<br/>
                            Surface Water: {planet.detailedInfo.surface_water}%<br/>
                            Criation: {planet.detailedInfo.created}<br/>
                        </p>
                    <div className="buttons">
<Link to={`/details/${planet.id}`}>
                        <button >
                            profile

                        </button>
                        </Link>
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                    </div>

                        {/* <h6 className="card-title">I am {dog.age} year(s) old! </h6>
                        <p className="card-text">{dog.description} </p>
                        <h7 className="card-title"> I am {dog.breed}! </h7>
                        <a href="#" className="btn btn-danger my-2">Adopt-me! OR Fund My Life!</a> */}
                    </div>
                </div>
            </div>
        </>
     );
}

export default CardsPlanets;