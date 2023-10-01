import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function Banner() {
  return (
    <div className='w-full h-[500px] bg-slate-900'  >
        <div className='max-w-[1240px] mx-auto font-semibold text-center py-[70px] '>
            <div className='p-4 text-2xl text-white md:p-8 md:text-4xl'>Learn  with us</div>
            <div className='p-4 text-3xl text-blue-600 capitalize md:p-6 md:text-6xl'>Grow with us</div>
            <div className='p-4 text-2xl text-white capitalize md:p-5 md:text-4xl'> Learn
            <TypeAnimation  className='ml-3 text-red-700'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web developement',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'ethical hacking',
        1000,
        'backend developement',
        1000,
        ' to be a fullstack developer',
        1000
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '1em', display: 'inline-block'  }}
      repeat={Infinity}
      backSpeed={1}
    />
            </div>
            <button className=   'p-2 font-mono text-white bg-black rounded hover:bg-green-600' >Get Started</button>

        </div>
   
    </div>
  )
}

export default Banner