import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import { Service } from './Components/Service/Service';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Home/>}
      >
        <Route
        path="/navbar"
        element={<Navbar/>}
      >
      </Route>
        <Route
        path="/about"
        element={<About/>}
      >
      </Route>
        <Route
        path="/service"
        element={<Service/>}
      >
      </Route>
        <Route
        path="/project"
        element={<Project/>}
      >
      </Route>
        <Route
        path="/contact"
        element={<Contact/>}
      >
      </Route>
      </Route>
      
      
      
    </Route>
  )
);

function App() {

  return (
    <>
      <div className=" bg-[#081b29] md:h-screen " >
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
