import React, {  useEffect, useRef, useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Contact = () => {

  const navigate = useNavigate()
  const form = useRef();



  const [name,setName]=useState('')
  const [nameErr,setNameErr]=useState('')
  const [email,setEmail]=useState('')
  const [emailErr,setEmailErr]=useState('')
  const [number,setNumber]=useState('')
  const [subject,setSubject]=useState('')

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
            setName('')
            setEmail('')
            setNumber('')
            setSubject('')
            setMassage('')
            Swal.fire({
              title: 'Success!',
              text: 'Successfully Done',
              icon: 'success',
            })
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

  useEffect(() => {
    const contact = document.querySelector('.contact');
    const width = window.innerWidth;

    if (width < 768) {
      contact.removeAttribute('data-aos');
    }
  }, []);







  return (
    <>
      <div className='md:px-[20px] px-[5px] md:py-[100px] py-[30px] contact' data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="2000">
        <div className='md:flex gap-[50px] items-center '>
          <div className='md:w-1/2   md:p-[40px]   flex justify-center items-center'>
            <div>
              <p className='text-[#37B7C3] font-vollo font-semibold md:text-[45px] text-[25px] '><span>Dhaka</span> <span className='text-[#00abf0]'>Bangladesh</span> </p>
              <p className=' font-vollo font-semibold md:text-[20px] text-[17px] md:mt-[20px]  text-[#999999]'>Chalabon Dakshinkhan Uttara Dhaka-1230</p>
              <p className='text-white  font-semibold md:text-[25px] text-[18px] md:mt-[30px]'>mdliton5506@gmail.com</p>
              <p className='text-white  font-semibold md:text-[25px] text-[18px] md:mt-[25px] '>+8801953975506</p>
            </div>
          </div>
          <div className='md:w-1/2 border border-2 rounded-lg border-[#37B7C3] md:p-[40px] p-[20px] mt-[20px] md:mt-[0px]'>
            {/* <ToastContainer
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
/> */}
            <form  ref={form} onSubmit={sendEmail}>
              <div className='md:flex items-center gap-[50px]' >
                <div>
                  <p className='text-[15px] font-semibold   text-[#37B7C3] pl-[10px] mb-[5px]'>Name</p>
                  <input onChange={handleName} value={name} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent md:p-[10px] p-[5px] text-[#999999]' placeholder='Name' type="text" name='client_name' />
                  <p className='text-[15px] font-semibold mb-[5px]  text-red-500 pl-[10px] h-[10px]'>{nameErr}</p>
                </div>
                <div>
                  <p className='text-[15px] font-semibold  text-[#37B7C3] pl-[10px] mb-[5px]'>Email</p>
                  <input onChange={handleEmail} value={email} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent md:p-[10px] p-[5px] text-[#999999]' placeholder='Email' type="email" name='client_email' />
                  <p className='text-[15px] font-semibold mb-[5px]  text-red-500 pl-[10px] h-[10px]'>{emailErr}</p>
                </div>
              </div>
              <div className='md:flex items-center gap-[50px] md:mt-[25px]'>
                <div>
                  <p className='text-[15px] font-semibold mb-[5px]  text-[#37B7C3] pl-[10px]'>Number(optional)</p>
                  <input value={number} onChange={(e)=>setNumber(e.target.value)} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent md:p-[10px] p-[5px] text-[#999999] mb-[20px] md:mb-[0px]' placeholder=' Number(optional)' type="text" name='client_number' />
                </div>
                <div>
                  <p className='text-[15px] font-semibold mb-[5px]  text-[#37B7C3] pl-[10px]'>Subject(optional)</p>
                  <input onChange={(e)=>setSubject(e.target.value)} value={subject} className='border border-2 rounded-lg border-[#37B7C3] bg-transparent md:p-[10px] p-[5px] text-[#999999]' placeholder='Subject(optional)' type="text" name='subject' />
                </div>
              </div>
              <div className='mt-[40px] rounded-lg'>
                <textarea onChange={(e)=>setMassage(e.target.value)} value={massage}  className='md:h-[300px] h-[200px] w-full bg-transparent border border-2 rounded-lg border-[#37B7C3] text-[18px] text-white p-[10px]' placeholder='Massage' name='message'></textarea>
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