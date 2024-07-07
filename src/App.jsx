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
import CardsPlanets from './Components/CardsPlanets';
import CardsVehicles from './Components/CardsVehicles';

function App() {
  const {data,setData,fetchData,planets,setPlanets,fetchDataPlanets,vehicles,setVehicles,fetchDataVehicles}=useContext(FunctionContext);
  useEffect(()=>{
    fetchData();
    fetchDataPlanets();
    fetchDataVehicles();
  },[])

  /* console.log(data) */
  console.log(vehicles);

  //make favorites array later,maybe favorites,setFavorite and method to check if someone is already inFavorites? compare names?

  return (
    <>
      <Navbar/>

      <Routes>
      
      <Route path="/" element={
        <>
          <div className="row mx-1 mt-3"><h2>People</h2></div>
          <div className="row">
            {data.map((el) => (
              <Cards key={el.id} actor={el} />
            ))}
          </div>
          <div className="row mx-1 mt-3"><h2>Planet Entities</h2></div>
          <div className="row">
            {planets.map((el)=>(
              <CardsPlanets key={el.id} planet={el}/>
            ))}
          </div>
          <div className="row mx-1 mt-3"><h2>Vehicles 🚗 🚀</h2></div>
          <div className="row">
            {vehicles.map((el)=>(
              <CardsVehicles key={el.id} vehicle={el}/>
            ))}
          </div>
        </>
        } />
        
      <Route path="/details/:id" element={<Details/>}/>


      </Routes>

      
      
      
      {/* <Footer/> */}
        
    </>
  )
}

export default App
