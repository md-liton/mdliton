import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Welcome from '../Welcome/Welcome'

const Home = () => {
  const location =useLocation()
  return (
    <div className='flex max-w-container mx-auto gap-[20px] items-center '>
      <div className='w-[20%] rounded-xl' data-aos="fade-right"
        data-aos-offset="500"
     data-aos-duration="2000">
        <Sidebar />
      </div>
      <div className='w-[80%]'  data-aos="fade-left"
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
  )
}

export default Home