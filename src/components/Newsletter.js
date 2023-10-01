import React from 'react'

function Newsletter() {
  return (
<div className='w-full mt-2 bg-gray-700'>
    <div className='max-w-[1240px]  mx-auto md:flex justify-between  ' >
        <div className='text-center'> 
            <h1 className='p-3 mt-5 font-serif text-3xl text-white capitalize'>learn new IT skills at Rapid speed</h1>
            <span className='font-sans text-pink-400 capitalize'>sign up and start your journey</span>
        </div>
        <div className='p-5 mt-4 text-center'>
            <input type="text" placeholder='enter your email' className='py-1 mx-2 text-center rounded md:w-[300px] w-full'></input>
              <button className= 'px-1 py-1 my-3 font-mono text-white bg-black rounded hover:bg-green-600' >Notify me</button>
              <p className='font-mono text-center text-purple-500 '>
                  to know more <a className='text-yellow-500' href='#'> click Here</a>
              </p> 
        </div>
    </div>  
</div>
  )
}

export default Newsletter