import { useEffect, useState, useContext} from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
//Context needed ()using function?
import {FunctionContext} from "./Context/Context"

//move to home?
import Navbar from './Components/Navbar'
/* import Cards from './Components/Cards'; */
import Footer from './Components/Footer'
/* import Cards from './Components/Cards'; */

import "./style/styles.css"
import Cards from './Components/Cards';

function App() {
  const {fetchData,data,setData}=useContext(FunctionContext);
  useEffect(()=>{
    fetchData();
  },[])

  console.log(data)


  return (
    <>
      <Navbar/>

      {/* <Cards/> */}
      {data.map((el) =>{
        <div className="row">
          <Cards actor={el} />
        </div>
      })}
      
      <Footer/>
        
    </>
  )
}

export default App
