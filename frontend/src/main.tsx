//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap-grid.min.css'
import App from './App.tsx'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import axios from "axios";

axios.defaults.baseURL=
process.env.NODE_ENV==='development' ? 'http://localhost:4000': '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index={true}  element={<HomePage />} />
        <Route path="product/:slug"  element={<ProductPage/>}  />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>

//     <App />
//   </React.StrictMode>,
// )
