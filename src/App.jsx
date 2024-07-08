import { useEffect, useState, useContext } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { FunctionContext } from "./Context/Context"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Details from './Components/Details';
import "./style/styles.css"
import Cards from './Components/Cards';
import CardsPlanets from './Components/CardsPlanets';
import CardsVehicles from './Components/CardsVehicles';
import DetailsPlanets from './Components/DetailsPlanets';
import DetailsVehicles from './Components/DetailsVehicles';

function App() {
  const { data, setData, fetchData, planets, setPlanets, fetchDataPlanets, vehicles, setVehicles, fetchDataVehicles } = useContext(FunctionContext);
  useEffect(() => {
    fetchData();
    fetchDataPlanets();
    fetchDataVehicles();
  }, [])
  /* console.log(data) */
  /* console.log(planets); */
  /* console.log(vehicles); */
  //make favorites array later,maybe favorites,setFavorite and method to check if someone is already inFavorites? compare names?


  return (
    <>
      <Navbar />
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
              {planets.map((el) => (
                <CardsPlanets key={el.id} planet={el} />
              ))}
            </div>
            <div className="row mx-1 mt-3"><h2>Vehicles 🚗 🚀</h2></div>
            <div className="row">
              {vehicles.map((el) => (
                <CardsVehicles key={el.id} vehicle={el} />
              ))}
            </div>
          </>
        } />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details_planets/:uid" element={<DetailsPlanets />} />
        <Route path='/details_vehicles/:uid' element={<DetailsVehicles />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
