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
      </Route>
      
      
      
    </Route>
  )
);

function App() {

  return (
    <>
      <div className="relative h-screen w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-[1]">
        <div className="h-full w-full">
        <RouterProvider router={router} />
        </div>
      
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] z-[-1] ">
        </div>
      </div>
    </>
  )
}

export default App
