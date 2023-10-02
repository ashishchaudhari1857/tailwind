import React from 'react'
import {BsFacebook ,BsTwitter ,BsInstagram ,BsLinkedin} from'react-icons/bs'

function Footer() {
  return (
    <div className='w-full bg-slate-800'>
        <div className='max-w-[1240px]   lg:grid grid-cols-3 mx-auto font-serif'>
        <div className='col-span-1'>
            <h1 className='p-2 font-serif text-3xl text-center text-white'>Grow With Us </h1>
               <span className='text-center text-gray-400 lg:text-justify'>
               The href attribute requires a valid value to be accessible. Provide a valid, navigable addres
               </span>
             </div>
            <div className='flex justify-between col-span-2 p-2 '>
                <div className='p-1'>
                    <h1  className='p-2 py-2 text-xl text-white '>Navigation</h1>
                     <ul className='mt-1 text-gray-400'> 
                      <li className='mt-1'><a href='#'>Home</a></li>
                      <li className='mt-1'><a href='#'>About Us</a></li>
                      <li className='mt-1'><a href='#'>Services</a></li>
                      <li className='mt-1'><a href='#'> Feature</a></li>
                     </ul>
                    </div>
                <div className='p-1'>
                <h1  className='p-3 py-2 text-xl text-white'>Contact</h1>
                <ul className='mt-1 text-justify text-gray-400'> 
                      <li className='mt-1'>+9123456789</li>
                      <li className='mt-1'>abcd@gmail.com</li>
                      <li className='mt-1'>Chandrapur Maharashtra</li>
                     </ul>
                </div>
                <div className='p-1'>
                <h1  className='p-2 py-2 text-xl text-white '>Opening Hours</h1>
                <ul className='mt-1 text-justify text-gray-400'> 
                      <li className='mt-1'>Mon-Thus 9.00 am to 5.00 pm</li>
                      <li className='mt-1'>Fri  11.00 am to 6.00 pm</li>
                      <li className='mt-1'>Sat -Sun  closed</li>
                     </ul>
                </div>
            </div>
        </div>  


        <div className='mx-auto text-center text-gray-200 '>   &copy;2023 e-LEARN. All rights reserved.</div>
             <div className='flex justify-center gap-10 mx-auto mt-5 text-3xl text-white hover:text-red-400'>
<BsFacebook></BsFacebook>
<BsTwitter></BsTwitter>
<BsInstagram></BsInstagram>
<BsLinkedin></BsLinkedin>
             </div>
          </div>
  )
}

export default Footer