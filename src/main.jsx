import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter as Router, RouterProvider} from "react-router-dom";
import { FunctionProvider } from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunctionProvider>
      {/* <Router> */}
        <App />
     {/*  </Router> */}
    </FunctionProvider>
  </React.StrictMode>,
)
