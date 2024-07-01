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

function App() {
  const {fetchData,data,setData}=useContext(FunctionContext);
console.log(fetchData)
  /* useEffect(()=>{
    fetchData();
  },[]) */

  return (
    <>
      <Navbar/>

      {/* <Cards/> */}
      
      <Footer/>
        
    </>
  )
}

export default App
