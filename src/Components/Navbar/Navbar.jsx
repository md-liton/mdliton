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
    <div className=''>
      <ul className='skew-y-[-15deg] bg-[#ff2770] w-[150px] relative'>
        <li onClick={handleHome} className='ease-in duration-300  text-[#45f3ff] hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#ff2770] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[5] after:content-["_Home"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#ff2770] after:origin-bottom after:skew-x-[45deg] after:bg-[#ff2770] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#45f3ff]  after:hover:text-[#ff2770] after:hover:ease-in after:hover:duration-300 after:text-[1.5rem] font-semibold font-vollo hover:text-[#ff2770] '  ><IoHomeSharp className='text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Home</li>
        <li onClick={handleAbout} className='ease-in duration-300 text-[#45f3ff] hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#ff2770] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[4] after:content-["_About_me"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#ff2770] after:origin-bottom after:skew-x-[45deg] after:bg-[#ff2770] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#45f3ff]  after:hover:text-[#ff2770] after:hover:ease-in after:hover:duration-300 after:text-[1.5rem] after:text-[#ff2770] font-semibold font-vollo hover:text-[#ff2770]  '  ><IoMdContact className='text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> About me</li>
        <li onClick={handleService} className='ease-in duration-300 text-[#45f3ff] hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#ff2770] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[3] after:content-["_Service"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#ff2770] after:origin-bottom after:skew-x-[45deg] after:bg-[#ff2770] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#45f3ff]  after:hover:text-[#ff2770] after:hover:ease-in after:hover:duration-300 after:text-[1.5rem] after:text-[#ff2770] font-semibold font-vollo hover:text-[#ff2770]  '  ><GrServices className='text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right' /> Service</li>
        <li onClick={handleProject} className='ease-in duration-300 text-[#45f3ff] hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#ff2770] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[2] after:content-["_Project"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#ff2770] after:origin-bottom after:skew-x-[45deg] after:bg-[#ff2770] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#45f3ff]  after:hover:text-[#ff2770] after:hover:ease-in after:hover:duration-300 after:text-[1.5rem] font-semibold font-vollo hover:text-[#ff2770] after:text-[#ff2770]  '  ><TbWorldBolt className='text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Project</li>
        <li onClick={handleContact} className='ease-in duration-300 text-[#45f3ff] hover:translate-y-[40px] hover:translate-x-[40px] p-[10px] cursor-pointer hover:bg-[#45f3ff] before:content-[""] before:absolute before:w-[40px] before:h-full before:bg-[#ff2770] before:top-0 before:left-[-40px] before:skew-y-[45deg]  before:origin-right before:ease-in before:duration-300 before:hover:bg-[#45f3ff] relative  z-[1] after:content-["_Contact"] after:absolute after:top-[-40px] after:left-0 after:w-full after:h-[40px] after:bg-[#ff2770] after:origin-bottom after:skew-x-[45deg] after:bg-[#ff2770] after:hover:bg-[#45f3ff]  after:ease-in after:duration-300 after:px-[20px] after:text-[#45f3ff]  after:hover:text-[#ff2770] after:hover:ease-in after:hover:duration-300 after:text-[1.5rem] font-semibold font-vollo hover:text-[#ff2770] after:text-[#ff2770] '  ><IoIosMail className='text-[20px] absolute top-0 left-[-30px] skew-y-[45deg] origin-right'/> Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar