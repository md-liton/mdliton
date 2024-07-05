import React from 'react'
import { SiMongodb,SiExpress ,SiNextdotjs} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact,FaNodeJs } from "react-icons/fa";




const Skills = () => {
  return (
    <>
    <div>

    <div className='md:flex md:items md:center md:justify-center md:gap-[30px]'>
      <div className='border border-[#37B7C3] rounded-lg p-[25px] md:w-1/2'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <SiMongodb />
        <SiExpress />
        <FaReact />
        <FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px] font-vollo font-bold my-[10px]'>MERN STACK</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
      </div>
      <div className='border border-[#37B7C3] rounded-lg p-[25px] md:w-1/2 mt-[10px] md:mt-[0px]'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <FaReact /> <SiNextdotjs /><FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px] font-vollo font-bold my-[10px]'>Front-End Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
      </div>
    </div>
    <div className='md:flex md:items-center md:justify-center md:gap-[30px] mt-[20px]'>
      <div className='border border-[#37B7C3] rounded-lg p-[25px] md:w-1/2'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <SiMongodb />
        <SiExpress />
        <FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px] font-vollo font-bold my-[10px]'>Back-End Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
      </div>
      <div className='border border-[#37B7C3] rounded-lg p-[25px] md:w-1/2 mt-[20px] md:mt-[0px]'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <TbBrandReactNative />
        <FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px]  font-vollo font-bold my-[10px]'>App Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through.</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Skills