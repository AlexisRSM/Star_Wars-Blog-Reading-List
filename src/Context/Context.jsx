import { children, createContext,useState ,useContext } from "react";
import axios from "axios";


const FunctionContext = createContext(null);

let URL = "https://swapi.dev/api/people/?page=1";


export const FunctionProvider = ({children}) => {
    //states
    const [data, setData] = useState([]);

 /*    useEffect(()=>{
       
    },[])
 */
    //All Fuctions
    const fetchData =  async () =>  {
        try{
            let response = await axios.get(URL);

        }catch(err){
            console.error(err);
        }
    console.log(response);
    setData(response);
    }


return (
    <FunctionContext.Provider value={{fetchData}}>
        {children}
    </FunctionContext.Provider>
)
};