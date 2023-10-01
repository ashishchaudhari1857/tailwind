import React from 'react'

function Expert() {
  return (

        <div className='max-w-[1240px] mx-auto md:grid grid-cols-2  mt-2'>
        <div className='col-span-1 text-center' >
            <img src="lp.png" className='object-fill inline  rounded h-[100%] border border-blue-500 '  alt='not found'></img>
        </div>
        <div className='flex-col items-center col-span-1 p-5 mt-5'>

          <h1 className='text-2xl font-bold text-center text-red-900'> LEARN FROM EXPERTS </h1>
           <p className='text-center'>
           The Romans used urine as a cleaning agent. They believed that the ammonia in urine had 
           cleaning properties, so they used it to clean various things, including their clothes. In fact, 
           they even had special urine collectors stationed throughout the city of Rome where people 
           could deposit their urine for later use in cleaning. 
           </p>
           
         <button className=   'flex p-2 mx-auto my-3 font-mono text-white bg-black rounded hover:bg-green-600' >Get Started</button>
        </div>
    </div> 
  )
}

export default Expert