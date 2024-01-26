'use client'

import { useState } from "react"


const tabs = [
  {
    value: "all-blogs",
    name: "All Blogs"
  },
  {
    value: "trends",
    name: "Trends"
  },
  {
    value: "research",
    name: "Research"
  },
  {
    value: "in-house-knoledge",
    name: "In-house Knowledge"
  },
  
]


const BlogsFilter = () => {

  const [currentTab, setCurrentTab] = useState("all-blogs")


  return (
    <div className='flex justify-center item-center gap-4 flex-wrap mt-8 md:mt-0 md:gap-0'>
      {tabs.map(tab => (
        <button 
          key={tab.value} 
          className={`
            py-1.5 rounded-full text-xl font-bold hover:bg-[#EDF2F5] !leading-[150%] tracking-[0.2px] px-3 transition-all duration-300 border border-transparent
            ${currentTab === tab.value ? "!border-[#294F74] text-[#294F74] bg-[#EDF2F5]" : "text-alt"}
          `}
          onClick={() => setCurrentTab(tab.value)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  )
}

export default BlogsFilter