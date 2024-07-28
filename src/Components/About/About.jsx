import React, { useEffect } from 'react'
import { SiMongodb,SiExpress ,SiNextdotjs} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact,FaNodeJs } from "react-icons/fa";
import profile from '../../assets/profile.jpg'


const About = () => {


    useEffect(()=>{
        let about =document.querySelector('.about')
        let width = window.innerWidth
        

        if(width<768){
            about.removeAttribute('data-aos');
        }
    },[])


  return (
    <>
          <div className='2xl:p-[10px]  about' data-aos="flip-up" data-aos-duration="2000">
              <div className='md:flex md:items-center border border-2 rounded-lg border-[#37B7C3] p-[10px] md:gap-[25px] xl:gap-[50px] '>
                  <div className='lg:w-3/4  '>
                      <p className='text-white font-vollo font-bold xl:text-[35px] text-[25px] '>Hello</p>
                      <h1 className='text-white font-vollo font-bold xl:text-[25px] text-[20px]'>I am Md Liton</h1>

                      <div className='xl:h-[50px]'>
                          <p className='text-[#37B7C3] font-vollo font-semibold xl:text-[30px] text-[15px] my-[7px] xl:my-[0px] '><span>Mern Stack</span> <span className='text-[#45f3ff]'>Developer</span> </p>
                      </div>


                      <p className=' text-white font-play font-thin text-[13px] text-justify'>I have more than 2 years+ experience building dynamic website for clients all over the world.Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project.<span className='md:hidden 2xl:block'>Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through</span></p>
                      <div className="btn mt-[20px] flex items-center gap-[20px]"></div>
                  </div>
                  <div className='lg:w-1/4  '>
                      <div className='h-[120px] w-[120px] xl:h-[200px] xl:w-[200px] border border-4 rounded-full border-[#37B7C3] hidden md:block overflow-hidden'>
                        <img src={profile} alt="" />
                      </div>
                  </div>
              </div>

              <div className='md:flex md:gap-[20px] xl:gap-[50px] mt-[15px] '>
                  <div className='lg:w-2/4 '>
                      <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px]'>
                          <p className='text-white font-vollo font-bold 2xl:text-[35px] text-[25px] '>Certificate</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold lg:text-[13px] xl:text-[20px] text-[15px]'>MERN Stack Development - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F]'>(2023 - 2024) - Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold xl:text-[20px] text-[15px] mt-[15px] '>Web Design - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F]'>(2022) - Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold xl:text-[20px] text-[15px] mt-[15px] '>Diploma in MERN  - (Creative It Institute)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F]'>(2023 - 2024) - Dhaka , Bangladesh</p>
                      </div>
                  </div>
                  <div className='lg:w-2/4  mt-[20px] md:mt-[0px]'>
                      <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px]'>
                          <p className='text-white font-vollo font-bold 2xl:text-[35px] text-[25px]'>Education</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold xl:text-[20px] text-[15px] '>Degree - (Tongi Govt. College)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F] '>(2021 - 2025 Runnig) - Gazipur , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold xl:text-[20px] text-[15px] mt-[15px] '>HSC - (Uttara High School & College)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F]'>(2018-2020) -Uttara Dhaka , Bangladesh</p>
                          <h5 className='text-[#37B7C3] font-vollo font-bold md:text-[14px]  xl:text-[20px] text-[15px] mt-[15px] '>SSC - (Nawab Habibullah Model School & College)</h5>
                          <p className=' font-vollo font-bold text-[12px] text-[#3C5B6F]'>(2018) -Uttara Dhaka , Bangladesh</p>
                      </div>
                  </div>
              </div>

              <div className=' border border-2 rounded-lg border-[#37B7C3] p-[10px] xl:gap-[50px] 2xl:mt-[15px]  mt-[10px]'>
                      <p className='text-white font-vollo font-bold xl:text-[35px] text-[20px] text-center'>What I Use in project</p>
                      <div className='md:flex lg:justify-center gap-[15px] xl:gap-[25px] md:px-[40px] lg:my-[20px] 2xl:my-[25px] '>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <SiMongodb className='text-white text-[20px] xl:text-[40px]' />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>Mongodb</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <SiExpress   className='text-white  text-[20px] xl:text-[40px]' />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>Express js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <FaReact className='text-white text-[20px] xl:text-[40px]' />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>React js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <TbBrandReactNative className='text-white text-[20px] xl:text-[40px]' />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>React Native</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <SiNextdotjs className='text-white text-[20px] xl:text-[40px]' />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>Next js</h5>
                        </div>
                        <div className=' border border-2 rounded-lg border-[#37B7C3] p-[20px] cursor-pointer text-center mt-[20px] md:mt-[0px]'>
                            <div className='flex justify-center'>
                            <FaNodeJs className='text-white text-[20px] xl:text-[40px]'  />
                            </div>
                            <h5 className='text-white font-vollo font-bold text-[10px] xl:text-[18px]'>Node js</h5>
                        </div>
                      </div> 
              </div>
          </div>
    </>
  )
}

export default About