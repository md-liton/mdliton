import React, {  useRef, useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

  const navigate = useNavigate()
  const form = useRef();



  const [name,setName]=useState('')
  const [nameErr,setNameErr]=useState('')
  const [email,setEmail]=useState('')
  const [emailErr,setEmailErr]=useState('')

  const [massage,setMassage]=useState('')

  


  const handleName=(e)=>{
    setName(e.target.value)
    setNameErr("")
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailErr('')
  }






  const sendEmail = (e) => {
    e.preventDefault()
    try {
       if(!name){
      setNameErr('Please input your name');
    }
    if(!email){
      setEmailErr('Please give your email')
    }

    if(name && email){

      e.preventDefault();
  
      emailjs
        .sendForm('service_iubtnug', 'template_zy4uw2r', form.current, {
          publicKey: 'jMULs-3gVu-_A1Ois',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success('Successfully Done')
            setTimeout(()=>{
              navigate('/')
            },2000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
      
    } catch (error) {
      console.log(error);
    }

  };







  return (
    <>
      <div className='px-[20px] py-[100px] ' data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="2000">
        <div className='flex gap-[50px] items-center '>
          <div className='w-1/2   p-[40px]  flex justify-center items-center'>
            <div>
              <p className='text-[#37B7C3] font-vollo font-semibold text-[45px] '><span>Dhaka</span> <span className='text-[#00abf0]'>Bangladesh</span> </p>
              <p className=' font-vollo font-semibold text-[20px] mt-[20px]  text-[#999999]'>Chalabon Dakshinkhan Uttara Dhaka-1230</p>
              <p className='text-white  font-semibold text-[25px] mt-[30px]'>mdliton5506@gmail.com</p>
              <p className='text-white  font-semibold text-[25px] mt-[25px] '>+8801953975506</p>
            </div>
          </div>
          <div className='w-1/2 border border-2 rounded-lg border-[#37B7C3] p-[40px]'>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
/>
            <form  ref={form} onSubmit={sendEmail}>
              <div className='flex items-center gap-[50px]' >
                <div>
                  <p className='text-[15px] font-semibold   text-[#37B7C3] pl-[10px] mb-[5px]'>Name</p>
                  <input onChange={handleName} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent p-[10px] text-[#999999]' placeholder='Name' type="text" name='client_name' />
                  <p className='text-[15px] font-semibold mb-[5px]  text-red-500 pl-[10px] h-[10px]'>{nameErr}</p>
                </div>
                <div>
                  <p className='text-[15px] font-semibold  text-[#37B7C3] pl-[10px] mb-[5px]'>Email</p>
                  <input onChange={handleEmail} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent p-[10px] text-[#999999]' placeholder='Email' type="email" name='client_email' />
                  <p className='text-[15px] font-semibold mb-[5px]  text-red-500 pl-[10px] h-[10px]'>{emailErr}</p>
                </div>
              </div>
              <div className='flex items-center gap-[50px] mt-[25px]'>
                <div>
                  <p className='text-[15px] font-semibold mb-[5px]  text-[#37B7C3] pl-[10px]'>Number(optional)</p>
                  <input className='border border-2 rounded-lg border-[#37B7C3] bg-transparent p-[10px] text-[#999999]' placeholder=' Number(optional)' type="text" name='client_number' />
                </div>
                <div>
                  <p className='text-[15px] font-semibold mb-[5px]  text-[#37B7C3] pl-[10px]'>Subject(optional)</p>
                  <input className='border border-2 rounded-lg border-[#37B7C3] bg-transparent p-[10px] text-[#999999]' placeholder='Subject(optional)' type="text" name='subject' />
                </div>
              </div>
              <div className='mt-[40px] rounded-lg'>
                <textarea  className='h-[300px] w-full bg-transparent border border-2 rounded-lg border-[#37B7C3] text-[18px] text-white p-[10px]' placeholder='Massage' name='message'></textarea>
              </div>

              <button type="submit" value="Send" className='text-center text-white font-semibold text-[18px] border border-[#37B7C3]  border-2 rounded-lg py-[8px] px-[25px]  hover:ease-in hover:duration-300  hover:border-[#45f3ff] flex items-center justify-center gap-[10px] cursor-pointer mt-[15px]' >Send <FaTelegramPlane /></button>

            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Contact