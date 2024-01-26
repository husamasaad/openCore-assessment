import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <section className='py-12 container mx-auto px-4 sm:px-12' >
      <div className='bgGradiantAlt px-4 py-32 flex items-center relative rounded-2xl min-h-[500px]'>
        <div className='absolute top-0 left-0 right-0 w-full h-[110px] overflow-hidden z-10'>
          <Image 
            alt="bg"
            src="/WebBG.png"
            fill
            className='absolute left-0 top-0 object-cover rotate-180'
          />
        </div>
        <article className='flex flex-col items-center gap-y-20 md:flex-row md:justify-between px-20 w-full text-center md:text-left'>
          <div className='md:w-1/2'>
            <h2 className='flex-1 text-7xl text-white !leading-[120%] tracking-[-0.96px] max-w-[830px] mb-8'>
              Transforming your <span className='font-bold'>Ideas into reality</span>
            </h2>
            <p className='text-2xl text-gray-200 tracking-[0.24px] !leading-[150%] font-bold max-w-[500px]'>
              Let's build something extraordinary together to  captivate your audience.
            </p>
          </div>
          <div className='md:w-1/3'>
            <button className='w-96 h-96 border block mx-auto rounded-full hover:bgGradiantAlt transition duration-300'>
              <span className='text-center mx-auto block text-3xl text-gray-200 !leading-[150%] font-extrabold mt-16 break-words w-[90px]'>
                Let’s<br/>Work<br/>Together!
              </span>
            </button>
          </div>
        </article>
        <div className='absolute bottom-0 left-0 right-0 w-full h-[110px] overflow-hidden z-10'>
          <Image 
            alt="bg"
            src="/WebBG.png"
            fill
            className='absolute left-0 bottom-0 object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Cta