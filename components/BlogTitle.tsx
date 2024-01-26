import { Dot } from 'lucide-react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

interface TitleParams {
  size: string;
  tags: string[];
  title: string;
  readTime: string;
  date: string;
}

const BlogTitle = ({size, title, tags, readTime, date}: TitleParams) => {
  return (
    <>
    <div>
      <div className='flex gap-2 items-center'>
        <span className='text-base md:text-xl !leading-[150%] tracking-[0.2px] font-bold text-alt'>{tags[0]}</span>
        <Dot size="32px" />
        <span className='text-base md:text-xl !leading-[150%] tracking-[0.2px] font-bold text-alt'>{tags[1]}</span>
      </div>
      <h4 className={`text-primary ${size == "sm"? "text-2xl md:text-4xl" : "text-4xl md:text-6xl"}  mt-2 font-bold !leading-[142%] tracking-[-0.56px]`}>{title}</h4>
    </div>
    <div className='flex gap-2 items-center mt-2'>
    <span className='text-base md:text-xl !leading-[150%] tracking-[0.2px] font-bold text-alt'>{readTime}</span>
    <Dot size="32px" />
    <span className='text-base md:text-xl !leading-[150%] tracking-[0.2px] font-bold text-alt'>{date}3</span>
    </div>
    </>
  )
}

export default BlogTitle