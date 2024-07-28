import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'
import { IoMdMenu } from "react-icons/io";

const Home = () => {
  const location =useLocation()


  useEffect(() => {
    const home = document.querySelector('.home');
    const home2 = document.querySelector('.home2');
    const width = window.innerWidth;

    if (width < 768) {
      home.removeAttribute('data-aos');
      home2.removeAttribute('data-aos');
    }
  }, []);



  return (
    <>
    <div>
    <div className='md:flex lg:max-w-container mx-auto lg:gap-[15px] lg:items-center '>
      <div className='home md:w-[20%] md:rounded-xl' data-aos="fade-right"
        data-aos-offset="500"
     data-aos-duration="2000">
        <Sidebar />
      </div>
      <div className='home2 md:w-[80%]'  data-aos="fade-left"
        data-aos-offset="500"
     data-aos-duration="2000">
        {
          location.pathname == '/' &&
          <Welcome />
        }
        <Outlet>
        </Outlet>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home