import React, { useEffect } from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import { FaCloudDownloadAlt,FaLinkedin,FaGithub,FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';





const Sidebar = () => {

  return (
    <>

      <div className=' overflow-hidden p-[10px] md:p-[0px]'>

        <div className='box md:h-screen md:w-full '>
          <div className='md:px-[20px] md:py-[40px] p-[10px]'>
            <div className=''>
            <div className='flex justify-center  '>
              <div className=' h-[80px] w-[80px] rounded-full border border-[#37B7C3] border-[2px] '>
              </div>
            </div>
            <h1 className='text-center text-white font-vollo font-bold text-[18px] my-[10px]'>MD LITON</h1>
            <p className='text-center text-white font-play font-thin text-[13px] px-[40px] md:px-[0px]'>I'm a Mern Stack Developer. I strive to create simple, original, and impactful User Experiences</p>
            </div>


            <div className='flex md:justify-between justify-center mt-[10px]  p-[20px] gap-[20px] md:gap-0'>
              <Link  to='https://www.linkedin.com/in/md-liton-40b119218/' target='_blank' className='w-[40px] h-[40px] rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white'><FaLinkedin />
              </Link>
              <Link to='https://github.com/md-liton' target='_blank' className='w-[40px] h-[40px] rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white'><FaGithub />
              </Link>
              <Link to='/contact' className='w-[40px] h-[40px] rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white'><SiGmail />
              </Link>
            </div>
            <div className='flex justify-center items-center md:pt-[20px]'>
            <div className='text-center text-white font-vollo font-bold text-[13px] border border-[#37B7C3] border-2 rounded-lg py-[8px] px-[14px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span><FaCloudDownloadAlt /></span> <span>Download CV</span>
                </div>
            </div>
            <div className='  w-full flex justify-center items-center mt-[120px]  pl-[60px] md:block hidden '>
              <Navbar />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar