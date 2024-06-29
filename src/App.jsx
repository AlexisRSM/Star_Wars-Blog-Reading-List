import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom";
//Context?

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cards from './Components/Cards';
import "./style/styles.css"

function App() {
  
  return (
    <>
      <Navbar/>
        <Routes>
          <Route 
            path="/" element = {
              <Cards>

              </Cards>
            }
          />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
