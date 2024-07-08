import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { FunctionContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//test to get more data
import axios from "axios";

const baseUrl = "https://www.swapi.tech/api/vehicles"

function DetailsVehicles() {
    //Use State for more details
    const [details, setDetails] = useState("");

    const { vehicles } = useContext(FunctionContext);
    const { uid } = useParams();
    let vehicle = vehicles.filter((el) => {
        return el.uid === uid;
    })[0];
    //More Details?
    const fetchMoreDetailsVehicles = async () => {
        try {
            let response = await axios.get(`${baseUrl}/${uid}`);
            response = response.data; /* (could append to original object details)? */
            setDetails(response);
            /* console.log(response); */
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchMoreDetailsVehicles();
    }, [])
    console.log(details);
    return (
        <>
           {details ? (<div className="row d-flex align-items-center">
                <div className="col-4" >
                    <img src={vehicle.img} className="img-fluid my-4 mx-3" />
                </div>
                <div className="col-8 align-self-center">
                    <h2>{vehicle.name}</h2>
                    <p>
                        Cargo Capacity: {details.result.properties.cargo_capacity} it works but when trying to render does not have info (maybeiplement handle to fetch before render? ask lukasz)

                    </p>
                </div>
                <div className="col d-felx text-end mx-3">
                    <Link to={'/'}>
                        <button>
                            Get Back Home<i className="bi bi-arrow-return-left"></i>
                        </button>
                    </Link>
                </div>
            </div >) : "loading ..."}
            <Footer />
        </>
    );
}

export default DetailsVehicles;