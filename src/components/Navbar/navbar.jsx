import React from 'react'
import logo from './../../assets/logo.png';

export default function Navbar() {
  return (
    <div className='w-full h-[75px] bg-[#FFCFCF] p-3 flex'>
     <div className='ml-2 mt-[-23px]'>
     <img src={logo} className='h-26'/>
     </div>

     <div className='flex justify-end mr-46 ml-220 mt-3'>
      <button className='mr-6  bg-[#E50046] p-2 rounded-lg h-10 text-white'>Diagnosis</button>
      <button className='mr-6  bg-[#E50046]  p-2 rounded-lg h-10 text-white'>Sign in</button>
      <button className='mr-6  bg-[#E50046] p-2 rounded-lg h-10 text-white'>Register</button>
     </div>
    </div> 
  )
}

 