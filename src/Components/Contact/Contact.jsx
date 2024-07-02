import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
  return (
    <>
          <div className='px-[20px] py-[120px] '>
              <div className='flex gap-[50px] items-center '>
                  <div className='w-1/2   p-[40px]  flex justify-center items-center'>
                      <div>
                      <p className='text-[#45f3ff] font-vollo font-semibold text-[45px] '><span>Dhaka</span> <span className='text-[#ff2770]'>Bangladesh</span> </p>
                      <p className=' font-vollo font-semibold text-[20px] mt-[20px]  text-[#999999]'>Chalabon Dakshinkhan Uttara Dhaka-1230</p>
                      <p className='text-white  font-semibold text-[25px] mt-[30px]'>mdliton5506@gmail.com</p>
                      <p className='text-white  font-semibold text-[25px] mt-[25px] '>+8801953975506</p>
                      </div>
                  </div>
                  <div className='w-1/2 border border-2 rounded-lg border-[#ff2770]  cursor-pointer    p-[40px]'>
                  <div className='flex items-center gap-[50px]'>
                  <div>
                    <p className='text-[15px] font-semibold mb-[5px]  text-[#45f3ff]'>Name</p>
                  <input  className='border border-2 rounded-lg border-[#ff2770] bg-transparent p-[10px] text-[#999999]' placeholder='Name' type="text" />
                  </div>
                  <div>
                    <p className='text-[15px] font-semibold mb-[5px]  text-[#45f3ff]'>Email</p>
                  <input  className='border border-2 rounded-lg border-[#ff2770] bg-transparent p-[10px] text-[#999999]' placeholder='Email' type="email" />
                  </div>
                  </div>
                  <div className='flex items-center gap-[50px] mt-[25px]'>
                  <div>
                    <p className='text-[15px] font-semibold mb-[5px]  text-[#45f3ff]'>Number(optional)</p>
                  <input  className='border border-2 rounded-lg border-[#ff2770] bg-transparent p-[10px] text-[#999999]' placeholder=' Number(optional)' type="text" />
                  </div>
                  <div>
                    <p className='text-[15px] font-semibold mb-[5px]  text-[#45f3ff]'>Subject(optional)</p>
                    <input  className='border border-2 rounded-lg border-[#ff2770] bg-transparent p-[10px] text-[#999999]' placeholder='Subject(optional)' type="text" />
                    </div>
                  </div>
                  <div className='mt-[40px] rounded-lg'>
                    <textarea className='h-[300px] w-full bg-transparent border border-2 rounded-lg border-[#ff2770] text-[#999999] p-[10px]' placeholder='Massage'></textarea>
                  </div>

                  <button className='text-center text-white font-semibold text-[18px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[25px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer mt-[15px]'>Send <FaTelegramPlane /></button>
                  
                  
                  </div>
              </div>
          </div>
    </>
  )
}

export default Contact