import React from 'react'
import { TitleFont } from '../fonts/TitleFont';


const Work = () => {
  return (
    <section className="bg-blue-100 px-4 py-20" id="work">
      <div className="container mx-auto ">
      <h2
          className={`  text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Works
        </h2>
        
        <p className='text-2xl md:text-6xl text-center py-8'>―ただいま製作中です―</p>
      </div>
    </section>
  )
}

export default Work