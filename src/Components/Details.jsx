import Footer from "./Footer";
import { useContext } from "react";
import { FunctionContext } from "../Context/Context";

import { useParams } from "react-router-dom";



function Details() {

    const {data} =useContext(FunctionContext)
    const {id} =useParams()

    let actor = data.filter(el=>{
        return el.id === id
    })[0]
    return ( 
        <>
            <div className="row">
                <div className="col-6"><img src={actor.img}/></div>
                <div className="col-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, numquam sunt similique vitae, sapiente veniam dolore doloribus atque aliquid qui, vel ullam repudiandae dicta nemo sequi in asperiores minus.
                    </p>
                </div>
            </div>
            
            <Footer/> {/* //Maybe different footer like in the app  */}
        </>
    );
}

export default Details;