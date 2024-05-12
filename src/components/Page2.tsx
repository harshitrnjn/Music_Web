import React from 'react'
import Cards from './Cards'

const cardData = [
  {
    id:1,
    title: "Guitar Fundamentals",
    disp: "Learn the basic of playing guitar with our comprehensive beginner's course."
  },
  {
    id:2,
    title: "Advanced Vocal Techniques",
    disp: "Enhance your singing with advanced vocal techniques for intermediate to advance learners."
  },
  {
    id:3,
    title: "Music Production",
    disp: "Dive into Music production with this introductory course on the basis of sound engineering and mixing."
  },
  {
    id:4,
    title: "Blues Guitar Techniques",
    disp: "Discover the techniques of blues guitar to add soul and depth to your playing."
  },
  {
    id:5,
    title: "Electronic Music Production",
    disp: "Create compelling electronic music with our courses designed for beginners to advanced users."
  },
]
const Page2 = () => {
  return (
    <div className='w-full h-screen bg-black p-4 flex flex-col justify-center items-center'>
      <h1 className='text-center text-5xl text-white -mt-6 mb-9 dark:text-white font-bold'>Featured Courses</h1>
      <div className='flex flex-wrap gap-8 mt-[3vw] pl-7'>
      {cardData.map((item)=>(<Cards key={item.id} title={item.title} disc={item.disp} />))}
      </div>
    </div>
  )
}

export default Page2
