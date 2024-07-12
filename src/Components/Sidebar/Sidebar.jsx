import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import { FaCloudDownloadAlt,FaLinkedin,FaGithub,FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';
import { FaNodeJs } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import profile from '../../assets/profile.jpg'
import { HiX, HiMenuAlt3 } from 'react-icons/hi';






const Sidebar = () => {
  const location =useLocation()
  const [menubar, setMenubar] = useState(false);

  useEffect(()=>{
    let box = document.querySelector('.box')
    const width = window.innerWidth;

    if (width < 768) {
      if(location.pathname == '/' ){
        box.classList.remove('hidden')
      }else{
        box.classList.add('hidden')
      }
    }
  },[location])

  return (
    <>
    <div className='md:hidden'>
    <div className="p-2">
        <div className="md:hidden p-2 border-2 border-[#37B7C3] rounded-lg flex items-center">
          <div className="w-1/2 text-white font-vollo font-bold text-2xl">
            <FaNodeJs />
          </div>
          <div
            onClick={() => setMenubar(!menubar)}
            className="w-1/2 text-white font-vollo font-bold text-2xl flex justify-end cursor-pointer"
          >
            <HiMenu />
          </div>
        </div>
      </div>

      <div className={`menu ${menubar ? 'visible' : ''}`}>
        <div className="menu-content">
          <div className="menu-header">
            <h2>Menu</h2>
            <HiX className="menu-close" onClick={() => setMenubar(false)} />
          </div>
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full border-2 border-[#37B7C3] overflow-hidden">
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <h1 className="text-center text-white font-vollo font-bold text-xl my-2">MD LITON</h1>
          <p className="text-center text-white font-play font-thin text-[14px] px-2 md:px-0 mb-[10px]">
            I'm a Mern Stack Developer.
          </p>

          <div className=' mt-[25px]'>
              <Link to='/'  onClick={() => setMenubar(false)}>
                <div className='text-center text-white font-vollo font-bold text-[15px]  rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                  Home
                </div>
              </Link>
              <Link to='/about' onClick={() => setMenubar(false)}>
                <div className='text-center text-white font-vollo font-bold text-[15px]  rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                  About me
                </div>
              </Link>
              <Link to='/Service'  onClick={() => setMenubar(false)}>
                <div className='text-center text-white font-vollo font-bold text-[15px]  rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                  Service
                </div>
              </Link>
              <Link to='/project'  onClick={() => setMenubar(false)}>
                <div className='text-center text-white font-vollo font-bold text-[15px]  rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                  Project
                </div>
              </Link>
              <Link to='/contact'  onClick={() => setMenubar(false)}>
                <div className='text-center text-white font-vollo font-bold text-[15px]  rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                  Contact
                </div>
              </Link>
          </div>



        </div>
      </div>
    </div>
      <div className=' overflow-hidden p-[10px] md:p-[0px]'>

        <div className='box md:h-screen md:w-full '>
          <div className='md:px-[20px] md:py-[40px] p-[10px]'>
            <div className=''>
            <div className='flex justify-center  '>
              <div className=' h-[100px] w-[100px] rounded-full border border-[#37B7C3] border-[2px] overflow-hidden'>
                <img src={profile} alt="" />
              </div>
            </div>
            <h1 className='text-center text-white font-vollo font-bold text-[18px] my-[10px]'>MD LITON</h1>
            <p className='text-center text-white font-play font-thin text-[13px] px-[40px] md:px-[0px]'>I'm a Mern Stack Developer. <span className='md:hidden lg:block'>I strive to create simple, original, and impactful User Experiences</span></p>
            </div>


            <div className='flex  justify-center mt-[10px]  p-[20px] gap-[20px] '>
              <Link  to='https://www.linkedin.com/in/md-liton-40b119218/' target='_blank' className='w-[40px] h-[40px] l rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white  '><FaLinkedin />
              </Link>
              <Link to='https://github.com/md-liton' target='_blank' className='w-[40px] h-[40px] rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white'><FaGithub />
              </Link>
              <Link to='/contact' className='w-[40px] h-[40px] rounded-full  cursor-pointer border border-[#37B7C3] border-[2px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex justify-center items-center text-white'><SiGmail />
              </Link>
            </div>
            <div className='flex justify-center items-center md:pt-[20px]'>
            <div className='text-center text-white font-vollo font-bold text-[13px] md:text-[8px] xl:text-[15px] border border-[#37B7C3] border-2 rounded-lg py-[8px] px-[14px] md:py-[4px] md:px-[8px] lg:py-[8px] lg:px-[14px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span><FaCloudDownloadAlt /></span> <span>Download CV</span>
                </div>
            </div>
            <div className='  xl:w-full flex justify-center items-center mt-[80px] lg:pl-[20px] xl:mt-[120px]  xl:pl-[60px] md:block hidden '>
              <Navbar />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar