import React from 'react'
import logo from '../assets/logo.jpg'
import { IoSend } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='  border-t border-lightwhite pt-5 justify-items-center   items-center pb-10 lg:grid lg:grid-cols-3 mt-20  px-4  space-y-10'>
          
            <div>
            <div className='max-w-10 flex space-x-2 items-center '>
                 <img src={logo} alt="Logo" />
                 <p className='text-lg uppercase font-semibold text-dark'>Foo<span className='text-main'>Die</span></p>
                 </div>
                 <div className='mt-4'>
                 <p className='uppercase font-semibold text-dark text-xs mb-2'>get into touch :</p>
                <div className='flex bg-main  items-center '>
                <input type='text' placeholder='Enter Email' className='  outline-none border border-light px-4 py-3 w-full '/> 
               <div className='px-5'>
               <IoSend size={25}  color='#ffffff'/>  </div> 
                </div>    
                 </div>
            </div>
            <div className=' flex flex-col'>
                <p className=' font-semibold border-b border-light pb-1'>Pages</p>
                <div className='flex flex-col mt-3'>
                <a href='#' className=' text-sm mt-2'>Home</a>
                <a href='#about' className='text-sm mt-2'> About</a>
                <a href='#product'  className='text-sm mt-2'>Receipe</a>
                    </div>
            </div>
           
            <div className=' flex flex-col'>
                <p className=' font-semibold border-b border-light pb-1'>Social</p>
                <div className='flex flex-col mt-3'>
                <a href='#' className=' text-sm mt-2 capitalize'>facebook</a>
                <a href='#' className='text-sm mt-2 capitalize'> Instagram</a>
                <a href='#'  className='text-sm mt-2 capitalize'>Twitter</a>
                    </div>
            </div>

            
         
    </div>

  )
}

export default Footer