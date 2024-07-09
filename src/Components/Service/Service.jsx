import React, { useEffect } from 'react'
import { RiComputerLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaCode } from "react-icons/fa";







export const Service = () => {

  useEffect(() => {
    const service = document.querySelector('.service');
    const width = window.innerWidth;

    if (width < 768) {
      service.removeAttribute('data-aos');
    }
  }, []);




  return (
    <>
      <div className='py-[20px] service'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h1 className='text-white font-vollo font-bold lg:text-[35px] text-[25px]  text-center'>SERVICE</h1>
        <div className='md:flex lg:gap-[50px] gap-[20px] mt-[15px] '>
          <div className='md:w-2/4 '>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <FaCode className='text-white lg:text-[80px] text-[40px]' />
              <h1 className='text-white font-vollo font-bold lg:text-[25px] text-[15px] mt-[10px]'>Front-End Design</h1>
              <div className='flex lg:gap-[100px] text-[#37B7C3] mt-[15px] font-bold text-[13px] lg:text-[16px] '>
                <div >

                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Bootstrap</p>
                  <p>Jquery</p>
                  <p>Javascript</p>
                </div>
                <div>

                  <p>Tailwind css</p>
                  <p>SASS</p>
                  <p>Ant Design</p>
                </div>

              </div>
            </div>
          </div>
          <div className='md:w-2/4 mt-[15px] md:mt-[0px] '>
          <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <RiComputerLine className='text-white lg:text-[80px] text-[40px]' />
              <h1 className='text-white font-vollo font-bold lg:text-[25px] text-[15px] mt-[10px]'>Front-End Development</h1>
              <div className='flex lg:gap-[100px] text-[#37B7C3] mt-[15px] font-bold text-[13px] lg:text-[16px]'>
                <div>

                  <p>React Js</p>
                  <p>Next Js</p>
                  <p >React Router Dom</p>
                  <p>Dynamic Web</p>
                  <p>Node Js</p>
                </div>
                <div>

                  <p>Data Fetch</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='md:flex gap-[20px] lg:gap-[50px] mt-[40px] '>
          <div className='md:w-2/4 '>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <FaNodeJs  className='text-white lg:text-[80px] text-[40px]'/>
              <h1 className='text-white font-vollo font-bold lg:text-[25px] text-[15px] mt-[10px]'>Back-End Developmnet</h1>
              <div className='flex lg:gap-[100px] text-[#37B7C3] mt-[15px] font-bold text-[13px] lg:text-[16px]'>
                <div >

                  <p>Node Js</p>
                  <p>Express Js</p>
                  <p>Rest API</p>
                  <p>Mongo DB</p>
                  <p>Firebase</p>
                </div>

              </div>
            </div>
          </div>
          <div className='md:w-2/4  mt-[15px] md:mt-[0px] '>
          <div className='border border-2 rounded-lg border-[#37B7C3]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <MdOutlineMobileFriendly className='text-white lg:text-[80px] text-[40px]' />
              <h1 className='text-white font-vollo font-bold lg:text-[25px] text-[15px] mt-[10px]'>App Development</h1>
              <div className='lg:flex lg:gap-[100px] text-[#37B7C3] mt-[15px] font-bold text-[13px] lg:text-[16px]'>
                <div>

                  <p>React Native</p>
                  <p>Android</p>
                  <p>IOS</p>
                  <p>Expo</p>
                  <p>node js</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
