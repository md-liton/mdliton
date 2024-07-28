import React from 'react'
import { SiMongodb,SiExpress ,SiNextdotjs} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact,FaNodeJs } from "react-icons/fa";




const Skills = () => {
  return (
    <>
    <div>

    <div className='md:flex md:items md:center md:justify-center md:gap-[30px]'>
      <div className='border border-[#37B7C3] rounded-lg xl:p-[15px] 2xl:p-[25px] p-[10px] md:w-1/2'>
        <div className='flex items-center gap-[10px] text-white text-[30px] '>
        <SiMongodb />
        <SiExpress />
        <FaReact />
        <FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px] font-vollo font-bold xl:my-[10px] my-[5px]'>MERN STACK</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people<span className='md:hidden 2xl:block'>, and encourage investment through</span></p>
      </div>
      <div className='border border-[#37B7C3] rounded-lg xl:p-[15px] 2xl:p-[25px] p-[10px] md:w-1/2 mt-[20px] md:mt-[0px]'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <FaReact /> <SiNextdotjs /><FaNodeJs />
        </div>
        <h1 className='text-white lg:text-[20px] text-[15px] font-vollo font-bold xl:my-[10px] my-[5px]'>Front-End Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people<span className='md:hidden 2xl:block'>, and encourage investment through</span></p>
      </div>
    </div>
    <div className='md:flex md:items md:center md:justify-center md:gap-[30px] 2xl:mt-[20px] mt-[10px]'>
      <div className='border border-[#37B7C3] rounded-lg xl:p-[15px] 2xl:p-[25px] p-[10px] md:w-1/2'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <SiMongodb />
        <SiExpress />
        <FaNodeJs />
        </div>
        <h1 className='text-white lg:text-[20px] text-[15px] font-vollo font-bold xl:my-[10px] my-[5px]'>Back-End Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people<span className='md:hidden 2xl:block'>, and encourage investment through</span></p>
      </div>
      <div className='border border-[#37B7C3] rounded-lg xl:p-[15px] 2xl:p-[25px] p-[10px] md:w-1/2 my-[20px] md:my-[0px]'>
        <div className='flex items-center gap-[10px] text-white text-[30px]'>
        <TbBrandReactNative />
        <FaNodeJs />
        </div>
        <h1 className='text-white md:text-[20px] text-[15px]  font-vollo font-bold xl:my-[10px] my-[5px]'>App Development</h1>
        <p className=' text-white font-play font-thin text-[13px] text-justify '>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people<span className='md:hidden 2xl:block'>, and encourage investment through</span></p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Skills