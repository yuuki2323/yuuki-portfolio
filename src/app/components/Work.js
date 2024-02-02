import React from 'react'
import { TitleFont } from '../fonts/TitleFont';
import Image from 'next/image';
import work1 from "/public/work1.png"

const Work = () => {
  return (
    <section className="bg-blue-100 px-4 py-20" id="work">
      <div className="container mx-auto ">
      <h2
          className={`  text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Works
        </h2>
        
        <div className='mt-8 flex flex-col justify-center items-center'>
          <a href="https://xn--l8j8a2b0h4b8a.com/" target='_blank' className='block'>
            <Image src={work1} alt={work1} className='w-3/4 mx-auto'/>
          </a>
          <p className='mt-4 md:text-xl'>next.jsを用いたホームページ作成</p>
        </div>
      </div>
    </section>
  )
}

export default Work