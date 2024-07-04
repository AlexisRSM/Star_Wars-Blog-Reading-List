import { useEffect, useState, useContext} from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
//Context needed ()using function?
import {FunctionContext} from "./Context/Context"
import Navbar from './Components/Navbar'
/* import Cards from './Components/Cards'; */
import Footer from './Components/Footer'
/* import Cards from './Components/Cards'; */

import Details from './Components/Details';

import "./style/styles.css"
import Cards from './Components/Cards';

function App() {
  const {fetchData,data,setData}=useContext(FunctionContext);
  useEffect(()=>{
    fetchData();
  },[])

  console.log(data)

  //make favorites array later,maybe favorites,setFavorite and method to check if someone is already inFavorites? compare names?

  return (
    <>
      <Navbar/>

      <Routes>
    <Route path="/" element={data.map((el) =>{
       return ( <div className="row">
          <Cards actor={el} />
        </div>)
      })}/>

      <Route path="/details/:id" element={<Details/>}/>


      </Routes>

      
      
      
      <Footer/>
        
    </>
  )
}

export default App
