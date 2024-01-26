import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='absolute top-0 left-0 right-0 py-8 z-50'>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center border rounded-full bg-[#FCFCFD]'>
          <Link href="/" className='border-r p-6'>
            <Image 
              alt="logo"
              src="/logoIcon.svg"
              width={40}
              height={40}
            />
          </Link>
          <button className='p-6'>
            <Image 
              alt="logo"
              src="/menubarsIcon.svg"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar