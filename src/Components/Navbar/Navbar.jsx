import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoMdContact, IoIosMail } from "react-icons/io";
import { PiBrain } from "react-icons/pi";
import { TbWorldBolt } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';




const Navbar = () => {

  const navigate = useNavigate()

  const handleHome=()=>{
    navigate('/')
    location.reload()
  }

  const handleAbout =()=>{
    navigate('/about')
  }

  const handleService =()=>{
    navigate('/service')
  }
  const handleProject=()=>{
    navigate('/project')
  }
  const handleContact =()=>{
    navigate('/contact')
  }



  return (
    <>
    <div className='md:ml-[25px]  xl:ml-[0px]'>
      <ul className='skew-y-[-15deg] bg-[#37B7C3] w-[100px] lg:w-[120px] xl:w-[150px] relative'>
        <li onClick={handleHome} className='ease-in duration-300  text-white hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#37B7C3] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[5] after:content-["_Home"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#37B7C3] after:origin-bottom after:skew-x-[45deg] after:bg-[#37B7C3] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-white  after:hover:text-white after:hover:ease-in after:hover:duration-300 after:lg:text-[1.5rem] font-semibold font-vollo hover:text-white '  ><IoHomeSharp className='lg:text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Home</li>
        <li onClick={handleAbout} className='ease-in duration-300 text-white hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#37B7C3] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[4] after:content-["_About"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#37B7C3] after:origin-bottom after:skew-x-[45deg] after:bg-[#37B7C3] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#37B7C3]  after:hover:text-white after:hover:ease-in after:hover:duration-300 after:lg:text-[1.5rem] after:text-[#37B7C3]font-semibold font-vollo hover:text-white  '  ><IoMdContact className='lg:text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> About me</li>
        <li onClick={handleService} className='ease-in duration-300 text-white hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#37B7C3] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[3] after:content-["_Service"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#37B7C3] after:origin-bottom after:skew-x-[45deg] after:bg-[#37B7C3] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#37B7C3]  after:hover:text-white after:hover:ease-in after:hover:duration-300 after:lg:text-[1.5rem] after:text-[#37B7C3]font-semibold font-vollo hover:text-white  '  ><GrServices className='lg:text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right' /> Service</li>
        <li onClick={handleProject} className='ease-in duration-300 text-white hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#37B7C3] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[2] after:content-["_Project"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#37B7C3] after:origin-bottom after:skew-x-[45deg] after:bg-[#37B7C3] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#37B7C3]  after:hover:text-white after:hover:ease-in after:hover:duration-300 after:lg:text-[1.5rem] font-semibold font-vollo hover:text-white after:text-[#37B7C3] '  ><TbWorldBolt className='lg:text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Project</li>
        <li onClick={handleContact} className='ease-in duration-300 text-white hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#37B7C3] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[1] after:content-["_Contact"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#37B7C3] after:origin-bottom after:skew-x-[45deg] after:bg-[#37B7C3] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#37B7C3]  after:hover:text-white after:hover:ease-in after:hover:duration-300 after:lg:text-[1.5rem] font-semibold font-vollo hover:text-white after:text-[#37B7C3]'  ><IoIosMail className='lg:text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar