import { SignupFormDemo } from '@/components/Signup'
import { BackgroundBeams } from '@/components/ui/background-beam'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
      <SignupFormDemo/>
    </div>
    <BackgroundBeams className='blur-[1px]'/>
    </>
  )
}

export default page
