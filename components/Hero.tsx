import Image from 'next/image'
import React from 'react'
import BlogTitle from './BlogTitle'

const Hero = () => {
  return (
    <section className='min-h-screen relative bgGradiant'>
      <div className='absolute top-0 left-0 right-0 w-full h-[130px] overflow-hidden z-10'>
        <Image 
          alt="bg"
          src="/WebBG.png"
          fill
          className='absolute left-0 top-0 object-cover rotate-180'
        />
      </div>
      <div className='container mx-auto px-4 md:px-32 relative z-40 py-[150px]'>
        <article className='flex flex-col items-center md:flex-row md:justify-between text-center md:text-left'>
          <h1 className='flex-1 text-5xl mb-8 md:mb-0 md:text-7xl font-bold text-primary !leading-[114%] tracking-[-0.96px] max-w-[830px]'>Atlas Premier Knowledge Blogs:</h1>
          <p className='text-3xl text-alt !leading-[150%] font-bold max-w-[500px]'>"Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals."</p>
        </article>
        <article className='flex flex-col h-full md:flex-row md:justify-between overflow-hidden rounded-2xl mt-20 bg-white p-2 shadow-xl'>
          <div className='md:w-1/2'>
            <Image 
              src="/heroImage.png"
              alt="hero image"
              height={588}
              width={755}
            />
          </div>
          <div className='md:w-1/2 bg-[#F8F8F8] px-4 md:px-12 py-8 flex flex-col justify-between'>
            <BlogTitle 
              size="lg"
              title="07 Ways to get Consistent Clients from Social Media"
              readTime="15 Min Read"
              date="23 - 05 -2023"
              tags={["FREELANCING 101", "Joseph Patrick"]}
            />
          </div>
        </article>
      </div>
      <div className='absolute bottom-0 left-0 right-0 w-full h-[155px] overflow-hidden hidden md:block z-10'>
        <Image 
          alt="bg"
          src="/WebBG.png"
          fill
          className='absolute left-0 bottom-0 object-cover'
        />
      </div>
    </section>
  )
}

export default Hero