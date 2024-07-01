import {createContext,useState ,useContext, useEffect } from "react";
import axios from "axios";


const FunctionContext = createContext(null);

let URL = "https://swapi.dev/api/people/?page=1";


const FunctionProvider = ({children}) => {
    //states
    const [data, setData] = useState([]);

    const fetchData =  async () =>  {
        try{
            let response = await axios.get(URL);
            response= response.data;
            console.log(response);
            setData(response);
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