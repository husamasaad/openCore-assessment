import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#294F74] py-12 px-4 relative'>
      <div className='container mx-auto px-4 sm:px-32 bg-white py-12 rounded-2xl'>
        <div className='flex flex-col items-center gap-20 md:gap-0 md:flex-row md:items-start justify-between'>
          <div className='text-center md:text-left'>
            <span className='text-primary text-xl font-bold'>Say Hello!</span>
            <p className='text-[#475467] text-xl !leading-[150%] tracking-[0.2px]'>Atlaspremier@gmail.com</p>
            <div className='flex items-center gap-4 mt-6'>
              <Link href="/" className='bg-[#F2F4F7] p-2 text-primary rounded-lg'>
                <Facebook />
              </Link>
              <Link href="/" className='bg-[#F2F4F7] p-2 text-primary rounded-lg'>
                <Twitter />
              </Link>
              <Link href="/" className='bg-[#F2F4F7] p-2 text-primary rounded-lg'>
                <Instagram />
              </Link>
              <Link href="/" className='bg-[#F2F4F7] p-2 text-primary rounded-lg'>
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className='w-full px-8'>
            <div className='flex justify-between md:justify-end gap-12'>
              <ul className='flex flex-col gap-4'>
                <Link href="/"><li className='text-primary text-xl !leading-[150%] tracking-[0.2px]'>Home</li></Link>
                <Link href="/"><li className='text-primary text-xl !leading-[150%] tracking-[0.2px]'>About Us</li></Link>
                <Link href="/"><li className='text-primary text-xl !leading-[150%] tracking-[0.2px]'>Work</li></Link>
              </ul>
              <ul className='flex flex-col gap-4'>
                <Link href="/"><li className='text-primary text-xl !leading-[150%] tracking-[0.2px]'>Services</li></Link>
                <Link href="/"><li className='text-primary text-xl !leading-[150%] tracking-[0.2px]'>Contact Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col gap-4 md:flex-row justify-between mt-16'>
          <p className='text-[#475467] text-xl !leading-[150%] tracking-[0.2px]'>NewYork, US</p>
          <p className='text-[#475467] text-xl !leading-[150%] tracking-[0.2px]'>AtlasPremier. All Rights Reserved</p>
        </div>
        <div className='mt-40'>
          <h4 className='absolute bottom-10 md:bottom-8 text-[#294F74] text-6xl md:text-9xl z-50 left-1/2 -translate-x-1/2 truncate font-extrabold'>Atlas Premier </h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer