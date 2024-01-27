import React from 'react'
import BlogTitle from './BlogTitle'
import BlogsFilter from './BlogsFilter'
import Image from 'next/image'

interface Blog {
  tags: string[];
  title: string;
  readTime: string;
  date: string;
  image: string;
}
interface BlogsProps {
  posts: Blog[];
}

const Blogs = ({ posts }: BlogsProps) => {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4 md:px-12'>
      <article className='flex flex-col items-center md:flex-row md:justify-between'>
        <h1 className='flex-1 text-7xl font-bold text-primary !leading-[114%] tracking-[-0.96px]'>Blogs:</h1>
        <BlogsFilter />
        
      </article>
      <article className='flex flex-col h-full md:flex-row md:justify-between overflow-hidden rounded-2xl mt-20 bg-white p-2 shadow-xl'>
          <div className='md:w-1/2'>
            <div className='flex items-center w-full h-[358px] px-4 md:px-[70px] bg-gradient-to-b from-white to-[#F4F4F4]'>
              <Image 
                src={posts[0].image}
                alt="hero image"
                height={106}
                width={598}
                className='object-contain'
              />
            </div>
          </div>
          <div className='md:w-1/2 bg-[#F8F8F8] px-12 py-8 flex flex-col justify-between'>
            <BlogTitle title={posts[0].title} size="lg" readTime={posts[0].readTime} date={posts[0].date} tags={posts[0].tags} />
          </div>
        </article>
        <div className='grid gap-8 mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {posts.map((post, index) => {
            if (index == 0) {
              return null
            }
            return (
            <div className='bg-white border border-transparent hover:border-gray-300 cursor-pointer flex flex-col items-center p-2 overflow-hidden rounded-2xl shadow-xl'>
              <div className='bg-[#F8F8F8] h-full flex flex-col justify-start'>
                <div className='h-[320px] w-full flex items-center justify-center bg-gradient-to-b from-white to-[#F4F4F4] p-4'>
                  <Image 
                    alt={post.title}
                    src={post.image}
                    width={167}
                    height={205}
                    className='mx-auto object-cover'
                  />
                </div>
                <div className='flex flex-col justify-between flex-1 bg-[#F8F8F8] p-4'>
                  <BlogTitle size="sm" title={post.title} readTime={post.readTime} date={post.date} tags={post.tags} />
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Blogs