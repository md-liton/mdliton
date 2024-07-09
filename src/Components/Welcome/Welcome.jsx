import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Skills from '../Skills/Skills'
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import About from '../About/About';
import Project from '../Project/Project';
import { Service } from '../Service/Service';
import Contact from '../Contact/Contact'
import profile from '../../assets/profile.jpg'

const Welcome = () => {
  const [text] = useTypewriter({
    words:['Mern Stact','Front-End','Back-End','APP','Full Stack'],
    loop:{},
    delaySpeed:1000
  })
  return (
    <>
      <div className='lg:p-[10px]'>
        <div className=' border border-2 rounded-lg border-[#37B7C3] lg:p-[10px]'>
          <div className='md:flex md:items-center'>


            <div className='md:w-1/2 p-[10px]'>
              <h1 className='text-white font-vollo font-bold  lg:text-[45px] text-[30px] '>Md Liton</h1>

              <div className='lg:h-[50px]'>
                <p className='text-[#37B7C3] font-vollo font-semibold lg:text-[30px] text-[25px] '><span>{text}</span> <span className='text-[#00abf0]'>Developer</span> </p>
              </div>


              <p className=' text-white font-play font-thin text-[13px]'>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
              <div className="btn lg:mt-[20px] mt-[8px] flex md:justify-start justify-center gap-[20px] ">
                <Link to='/contact'>
                <div className='text-center text-white font-vollo font-bold text-[13px] md:text-[8px] lg:text-[15px] border border-[#37B7C3] border-2 rounded-lg py-[8px] px-[14px] md::py-[4px] md:px-[8px] lg:py-[8px] lg:px-[14px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span>Hire Me</span> <span><FaTelegramPlane /></span>
                </div>
                </Link>
              </div>
            </div>


            <div className='md:w-1/2 md:flex md:justify-center '>
            <div className='box   hidden md:block '>
              <div className='lg:w-[250px] lg:h-[250px] w-[130px] h-[130px] p-[5px]  p-[10px] flex justify-center items-center'>
                <img className='rounded-lg lg:w-[230px] lg:h-[230px] w-[120px] h-[120px]' src={profile} alt="" />
              </div>
        </div>
            </div>


          </div>

        </div>
        <div className=' border border-2 rounded-lg border-[#37B7C3] lg:p-[20px] p-[10px] mt-[15px]'>
        <h1 className='text-white font-vollo font-bold text-[25px] '>What I do</h1>
        <p className=' text-white font-play font-thin text-[13px] '>I have more than 2 years experience building dynamic website for clients all over the world.Below is a quick overview of my main technical skill sets and technologies I use.
        Want to find out more about my experience? Check out my online resume and project.</p>
        <div className='lg:mt-[30px] mt-[8px]'>
          <Skills/>
        </div>

        <div className='md:hidden block'>
          <About/>
          <Service/>
          <Project/>
          <Contact/>
        </div>


        </div>
      </div>
    </>
  )
}

export default Welcome