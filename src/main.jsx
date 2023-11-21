import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Containers } from './Containers.jsx'
import { BrowserRouter } from "react-router-dom";
import MyRoutes from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <MyRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
