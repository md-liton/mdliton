import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { GrProjects } from "react-icons/gr";
import { FaFileContract } from "react-icons/fa";
import Skills from '../Skills/Skills'

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
          <div className='flex items-center'>


            <div className='w-1/2 p-[10px]'>
              <h1 className='text-white font-vollo font-bold text-[45px] '>Md Liton</h1>

              <div className='h-[50px]'>
                <p className='text-[#37B7C3] font-vollo font-semibold text-[30px] '><span>{text}</span> <span className='text-[#00abf0]'>Developer</span> </p>
              </div>


              <p className=' text-white font-play font-thin text-[13px]'>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through..</p>
              <div className="btn mt-[20px] flex items-center gap-[20px]">

                <div className='text-center text-white font-vollo font-bold text-[13px] border border-[#37B7C3]  border-2 rounded-lg py-[10px] px-[35px] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span><GrProjects /></span> <span>View project</span>
                </div>
                <div className='text-center text-white font-vollo font-bold text-[13px] border border-[#37B7C3]  border-2 rounded-lg py-[10px] px-[35px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>
                <span><FaFileContract /></span> <span>View Resume</span>
                </div>
              </div>
            </div>


            <div className='w-1/2'>
              <div className='box h-[250px] w-full '>
                <div className='p-[25px]'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat molestias dolores, doloremque ipsum quia eaque! Numquam non ex, incidunt tenetur hic laboriosam provident animi!</p>
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
        </div>
      </div>
    </>
  )
}

export default Welcome