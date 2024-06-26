import React from 'react'
import { TitleFont } from '../fonts/TitleFont';
import Image from 'next/image';
import work1 from "/public/work1.png"
import work2 from "/public/work2.png"
const Work = () => {
  return (
    <section className="bg-blue-100 px-4 py-20" id="work">
      <div className="container mx-auto ">
      <h2
          className={`  text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider ${TitleFont.className} text-gray-800`}
        >
          Works
        </h2>
        
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-16'>
        <div className='mt-8 flex flex-col justify-center items-center md:w-1/2'>
          <a href="https://xn--l8j8a2b0h4b8a.com/" target='_blank' className='block'>
            <Image src={work1} alt={work1} className=' aspect-video'/>
          </a>
          <p className='mt-4 text-sm md:text-lg'>next.jsを用いたホームページ作成</p>
        </div>
        <div className='mt-8 flex flex-col justify-center items-center md:w-1/2'>
          <a href="https://curascopium.org/" target='_blank' className='block'>
            <Image src={work2} alt={work2}  className=' aspect-video '/>
          </a>
          <p className='mt-4 text-sm md:text-lg'>next.jsとmicroCMSを用いたホームページ作成</p>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Work