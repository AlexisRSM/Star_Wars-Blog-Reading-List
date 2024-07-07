import Footer from "./Footer";
import { useContext } from "react";
import { FunctionContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function DetailsPlanets() {
    const { planets } = useContext(FunctionContext);
    const { uid } = useParams();
    let planet = planet.filter((el) => {
        return el.uid === uid;
    })[0];
    return (
        <>
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <img src={planets.img} />
                </div>
                <div className="col-8 align-self-center">
                    <h2>{planets.name}</h2>
                    <p>
                        Born: {planets.uid}
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
