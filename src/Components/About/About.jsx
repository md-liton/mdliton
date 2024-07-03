import React from 'react'
import { SiMongodb,SiExpress ,SiNextdotjs} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact,FaNodeJs } from "react-icons/fa";


const About = () => {
  return (
    <>
          <div className='p-[10px] ' data-aos="flip-left" data-aos-duration="2000">
              <div className='flex items-center border border-2 rounded-lg border-[#37B7C3] p-[10px] gap-[50px]'>
                  <div className='w-3/4  '>
                      <p className='text-white font-vollo font-bold text-[35px] '>Hello</p>
                      <h1 className='text-white font-vollo font-bold text-[25px] '>I am Md Liton</h1>

                      <div className='h-[50px]'>
                          <p className='text-[#37B7C3] font-vollo font-semibold text-[30px] '><span>Mern Stack</span> <span className='text-[#45f3ff]'>Developer</span> </p>
                      </div>


                      <p className=' text-white font-play font-thin text-[13px]'>I have more than 2 years+ experience building dynamic website for clients all over the world.Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project.Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through..</p>
                      <div className="btn mt-[20px] flex items-center gap-[20px]"></div>
                  </div>
                  <div className='w-1/4  '>
                      <div className='h-[200px] w-[200px] border border-4 rounded-full border-[#37B7C3] '></div>
                  </div>
              </div>

              <div className='flex gap-[50px] mt-[15px] '>
                  <div className='w-2/4 '>
                      <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px]'>
                          <p className='text-white font-vollo font-bold text-[35px] '>Certificate</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] '>MERN Stack Development - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2023 - 2024) - Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] mt-[15px] '>Web Design - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2022) - Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] mt-[15px] '>Diploma in MERN  - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2023 - 2024) - Dhaka , Bangladesh</p>
                      </div>
                  </div>
                  <div className='w-2/4  '>
                      <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px]'>
                          <p className='text-white font-vollo font-bold text-[35px] '>Education</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] '>Degree - (Tongi Govt. College)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2021 - 2025 Runnig) - Gazipur , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] mt-[15px] '>HSC - (Uttara High School & College)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2018-2020) -Uttara Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold text-[20px] mt-[15px] '>SSC - (Nawab Habibullah Model School & College)</h5>
                          <p className=' font-vollo font-bold text-[13px] text-[#3C5B6F]'>(2018) -Uttara Dhaka , Bangladesh</p>
                      </div>
                  </div>
              </div>

              <div className=' border border-2 rounded-lg border-[#37B7C3] p-[10px] gap-[50px] mt-[15px] '>
                      <p className='text-white font-vollo font-bold text-[35px] text-center'>What I Use in project</p>
                      <div className='flex justify-center gap-[25px] px-[40px] my-[25px]'>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <SiMongodb className='text-white text-[40px]' />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>Mongodb</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <SiExpress   className='text-white text-[40px]' />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>Express js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <FaReact className='text-white text-[40px]' />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>React js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <TbBrandReactNative className='text-white text-[40px]' />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>React Native</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <SiNextdotjs className='text-white text-[40px]' />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>Next js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer'>
                            <FaNodeJs className='text-white text-[40px]'  />
                            <h5 className='text-white font-vollo font-bold text-[18px]'>Node js</h5>
                        </div>
                      </div> 
              </div>
          </div>
    </>
  )
}

export default About