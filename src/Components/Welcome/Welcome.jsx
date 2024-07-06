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
      <div className='p-[10px]'>
        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[10px]'>
          <div className='md:flex md:items-center'>


            <div className='md:w-1/2 p-[10px]'>
              <h1 className='text-white font-vollo font-bold md:text-[45px] text-[30px] '>Md Liton</h1>

              <div className='md:h-[50px]'>
                <p className='text-[#37B7C3] font-vollo font-semibold md:text-[30px] text-[25px] '><span>{text}</span> <span className='text-[#00abf0]'>Developer</span> </p>
              </div>


              <p className=' text-white font-play font-thin text-[13px]'>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through..</p>
              <div className="btn mt-[20px] flex md:justify-start justify-center gap-[20px] ">
                <Link to='/contact'>
                <div className='text-center text-white font-vollo font-bold text-[13px] border border-[#37B7C3]  border-2 rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span>Hire Me</span> <span><FaTelegramPlane /></span>
                </div>
                </Link>
              </div>
            </div>


            <div className='md:w-1/2 md:flex md:justify-center '>
            <div className='box   hidden md:block'>
              <div className='w-[250px] h-[250px] p-[5px] overflow-hidden p-[10px]'>
                <img className='rounded-lg' src={profile} alt="" />
              </div>
        </div>
            </div>


          </div>

        </div>
        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] mt-[15px]'>
        <h1 className='text-white font-vollo font-bold text-[25px] '>What I do</h1>
        <p className=' text-white font-play font-thin text-[13px] '>I have more than 2 years experience building dynamic website for clients all over the world.Below is a quick overview of my main technical skill sets and technologies I use.
        Want to find out more about my experience? Check out my online resume and project.</p>
        <div className='mt-[30px]'>
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