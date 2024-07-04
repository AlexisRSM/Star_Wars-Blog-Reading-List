function Cards({actor}) {
    return ( 
        <>
            <div className="col-md-4 col-sm-6">
                <div className="card my-2">
                    <img
                        src={dog.img} className="card-img-top img-fluid" alt={dog.name + dog.description}
                        style={{ objectFit: 'cover',height:"400px" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{actor.name} </h5>
                        
                        <p className="card-text">
                            Gender: {actor.gender}<br/>
                            Height: {actor.height}<br/>
                            Mass: {actor.mass}<br/>
                            Eye Color: {actor.eye}<br/>
                            Hair Color: {actor.hair}<br/>
                        </p>
                    <div className="buttons">
                        <button>

                        </button>
                        <button>
                            <i class="bi bi-star"></i>
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

export default Cards;