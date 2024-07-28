import React, { useEffect } from 'react'
import img1 from '../../assets/chatting.png'
import img2 from '../../assets/doob.png'
import img3 from '../../assets/finsweet.png'
import img4 from '../../assets/innovate.png'
import { Link } from 'react-router-dom'


const Project = () => {


  useEffect(() => {
    const project = document.querySelector('.project');
    const width = window.innerWidth;

    if (width < 768) {
      project.removeAttribute('data-aos');
    }
  }, []);




  return (
    <>
      <div className='py-[20px] lg:py-0 project'  data-aos="zoom-in-left"
     data-aos-duration="1500">
        <h1 className='text-white font-vollo font-bold xl:text-[35px] text-[25px]  text-center'>PROJECT</h1>
        <div className='md:flex xl:gap-[50px] gap-[20px] md:mt-[15px]  '>
          <div className='md:w-1/2'>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[15px] xl:p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='xl:h-[210px] h-[150px] w-full'>
                <img className="rounded-lg h-full w-full" src={img1} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Chatting Application</h1>
                <div className='flex gap-[30px]'>
                  <Link to='https://github.com/md-liton/Chatting-app-react' target='_blank'  className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                  <Link  to='https://chatting-app-react.vercel.app' target='_blank' className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>Live Project</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 mt-[15px] md:mt-[0px]'>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[15px] xl:p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='xl:h-[210px] h-[150px] w-full'>
                <img className="rounded-lg h-full w-full" src={img2} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Doob</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/doob' target='_blank'  className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://doob-liart.vercel.app' target='_blank' className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer'>Live Project</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='md:flex xl:gap-[50px] gap-[20px] mt-[15px]  '>
          <div className='md:w-1/2'>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[15px] xl:p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='xl:h-[210px] h-[150px] w-full'>
                <img className="rounded-lg h-full w-full" src={img3} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Finsweet</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/Finsweet' target='_blank'  className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://finsweet-five-tan.vercel.app' target='_blank'  className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer'>Live Project</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 mt-[15px] md:mt-[0px]'>
            <div className='border border-2 rounded-lg border-[#37B7C3]  p-[15px] xl:p-[20px] cursor-pointer hover:border-[#45f3ff] ease-in duration-300  '>
              <div className='xl:h-[210px] h-[150px] w-full'>
                <img className="rounded-lg h-full w-full" src={img4} alt="" />
              </div>
              <div>
                <h1 className=' text-white font-vollo font-bold text-[18px] my-[10px]'>Innovate</h1>
                <div className='flex gap-[30px]'>
                <Link to='https://github.com/md-liton/Inovate' target='_blank' className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View Code</Link>
                <Link to='https://inovate.vercel.app' target='_blank'  className='text-center text-white font-vollo font-bold md:text-[13px] text-[10px] border border-[#37B7C3]   border-2 rounded-lg md:py-[8px] py-[4px] md:px-[14px] px-[8px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer'>Live Project</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
                  <div className='flex justify-center md:justify-start xl:mt-[20px] mt-[15px]'>
                  <Link to='https://github.com/md-liton?tab=repositories' target='_blank' className='text-center text-white font-vollo font-bold md:text-[13px] text-[12px] border border-[#37B7C3]   border-2 rounded-lg py-[8px] px-[14px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer '>View More Project</Link>
                  </div>
        
      </div>
    </>
  )
}

export default Project