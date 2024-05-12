import React from 'react'
import {CoursesCard} from '@/components/CoursesCard'
import Footer from '@/components/Footer'

const data = [
  {
    id: "1",
    title: "Guitar Fundamentals",
    para: "Learn the basics of playing Guitar with comprehensive beginner's course.",
    img:"https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "2",
    title: "Piano for Beginners",
    para: "Start your musical journey with foundational piano skills taught by expert instructors",
    img:"https://images.unsplash.com/photo-1601312378427-822b2b41da35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpYW5vfGVufDB8fDB8fHww"
  },
  {
    id: "3",
    title: "Advanced Vocal Techniques",
    para: "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
    img:"https://images.unsplash.com/photo-1535712593684-0efd191312bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2VyfGVufDB8fDB8fHww"
  },
  {
    id: "4",
    title: "Drumming Mastery",
    para: "Master the drums with our comprehensive course covering all skill levels.",
    img:"https://images.unsplash.com/photo-1571327073757-71d13c24de30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "5",
    title: "Jazz Improvisation",
    para: "Learn the art of jazz improvisation with this course designed for all levels.",
    img:"https://images.unsplash.com/photo-1503853585905-d53f628e46ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF6enxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "6",
    title: "Music Production Fundamentals.",
    para: "Dive into music production with this introductory course on the basic of sound enginnering and mixing.",
    img:"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "7",
    title: "Songwritting Essential",
    para: "Learn the essentials of songwriting to express your musical creativity.",
    img:"https://plus.unsplash.com/premium_photo-1666299355977-5b45612c03b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "8",
    title: "Electronic Music Production.",
    para: "Create compelling electronic music with our course designed for beginner to advanced users.",
    img:"https://images.unsplash.com/photo-1509310202330-aec5af561c6b?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "9",
    title: "Classical Music History",
    para: "Explore the rich history of classical music from its origins to the present day.",
    img:"https://images.unsplash.com/photo-1519412666065-94acb3f8838f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const page = () => {
  return (
    <div className='w-full min-h-screen pt-[10vw]' style={{backgroundColor:""}}>
      <h1 className='text-[4vw] font-bold text-center'>All Courses(9)</h1>
      <div className='flex w-full flex-wrap pl-[5.22vw] gap-[7vw] gap-y-0'>
        {/* <CoursesCard/> */}
        {data.map((items)=>{
          return(
            <CoursesCard key={items.id} title={items.title} paragraph={items.para} img={items.img} />
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default page
