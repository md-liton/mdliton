import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaCode } from "react-icons/fa";







export const Service = () => {
  return (
    <>
      <div className='py-[20px]'>
        <h1 className='text-white font-vollo font-bold text-[35px]  text-center'>SERVICE</h1>
        <div className='flex gap-[50px] mt-[15px] '>
          <div className='w-2/4 '>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <FaCode className='text-white text-[80px]' />
              <h1 className='text-white font-vollo font-bold text-[25px] mt-[10px]'>Front-End Design</h1>
              <div className='flex gap-[100px] text-[#45f3ff] mt-[15px] font-bold '>
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
          <div className='w-2/4  '>
          <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <RiComputerLine className='text-white text-[80px]' />
              <h1 className='text-white font-vollo font-bold text-[25px] mt-[10px]'>Front-End Development</h1>
              <div className='flex gap-[100px] text-[#45f3ff] mt-[15px] font-bold'>
                <div>

                  <p>React Js</p>
                  <p>Next Js</p>
                  <p>React Router Dom</p>
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
        <div className='flex gap-[50px] mt-[40px] '>
          <div className='w-2/4 '>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <FaNodeJs  className='text-white text-[80px]'/>
              <h1 className='text-white font-vollo font-bold text-[25px] mt-[10px]'>Back-End Developmnet</h1>
              <div className='flex gap-[100px] text-[#45f3ff] mt-[15px] font-bold '>
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
          <div className='w-2/4  '>
          <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300 '>
              <MdOutlineMobileFriendly className='text-white text-[80px]' />
              <h1 className='text-white font-vollo font-bold text-[25px] mt-[10px]'>App Development</h1>
              <div className='flex gap-[100px] text-[#45f3ff] mt-[15px] font-bold'>
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
