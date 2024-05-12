import React from 'react'
import {Vortex} from './ui/vortex'

const SparkleEffect = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-[100vw] h-full"
      />
    </div>
  )
}

export default SparkleEffect
