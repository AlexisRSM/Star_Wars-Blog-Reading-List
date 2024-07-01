import { useEffect, useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
//Context needed ()using function?
import {FunctionContext, FunctionProvider} from "./Context/Context"
import Home from './Components/Home';
//move to home?
import Navbar from './Components/Navbar'
import Cards from './Components/Cards';
import Footer from './Components/Footer'
/* import Cards from './Components/Cards'; */

import "./style/styles.css"

function App() {
  const {fetchData}=UseContext(FunctionProvider);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <Navbar/>
      <Cards/>
      {/* {<Route>

      </Route>} */}
      <Footer/>
        
    </>
  )
}

export default App
