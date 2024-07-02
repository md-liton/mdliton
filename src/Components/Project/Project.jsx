import React from 'react'
import img1 from '../../assets/chatting.png'
import img2 from '../../assets/doob.png'
import img3 from '../../assets/finsweet.png'
import img4 from '../../assets/innovate.png'
import { Link } from 'react-router-dom'


const Project = () => {
  return (
    <>
      <div className='py-[20px]'>
        <h1 className='text-white font-vollo font-bold text-[35px]  text-center'>PROJECT</h1>
        <div className='flex gap-[50px] mt-[15px]  '>
          <div className='w-1/2'>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='h-[210px] w-full'>
                <img className="rounded-lg h-full w-full" src={img1} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Chatting Application</h1>
                <div className='flex gap-[30px]'>
                  <Link to='https://github.com/md-liton/Chatting-app-react' target='_blank'  className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                  <Link  to='https://chatting-app-react.vercel.app' target='_blank' className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>Live Project</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='h-[210px] w-full'>
                <img className="rounded-lg h-full w-full" src={img2} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Doob</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/doob' target='_blank'  className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://doob-liart.vercel.app' target='_blank' className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>Live Project</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='flex gap-[50px] mt-[15px]  '>
          <div className='w-1/2'>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='h-[210px] w-full'>
                <img className="rounded-lg h-full w-full" src={img3} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Finsweet</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/Finsweet' target='_blank'  className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://finsweet-five-tan.vercel.app' target='_blank'  className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>Live Project</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='border border-2 rounded-lg border-[#ff2770]  p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='h-[210px] w-full'>
                <img className="rounded-lg h-full w-full" src={img4} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Innovate</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/Inovate' target='_blank' className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://inovate.vercel.app' target='_blank'  className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>Live Project</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
                  <div className='flex mt-[20px]'>
                  <Link to='https://github.com/md-liton?tab=repositories' target='_blank' className='text-center text-white font-vollo font-bold text-[13px] border border-[#ff2770] bg-gradient-to-r from-[#ff2770] to-[#45f3ff] border-2 rounded-lg py-[8px] px-[14px] hover:text-[#45f3ff] hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View More Project</Link>
                  </div>
        
      </div>
    </>
  )
}

export default Project