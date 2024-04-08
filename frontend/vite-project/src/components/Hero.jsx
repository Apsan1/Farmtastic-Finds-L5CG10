import React from 'react'
import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-1 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1]relative">
        <img 
        className="w-full h-[550px] object-cover rounded-lg"
        src="/images/first.png"
         alt="veggies"
         />

<div className="absolute max-w-[600px] sm:ml-96 ml-8 top-[60%] -translate-y-[50%] sm:space-y-4">
    <p className="text-4xl hidden sm:block">100% organic, farm-fresh tonic </p>
    <h2 className="text-3xl sm:text--4xl md;text-6xl font-bold">
        Healthiest Veggies in town
    </h2>
    <p className="text-black-500 text-2xl pt-4 sm:pt-8">Starting At </p>
    <div className="font-medium text-[green] text-2xl sm:text-4xl pb-4 sm:pb-8">
        Rs.20
    </div>
    <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
        Shop Now <BsArrowRight />
     </div>
    </div>
   </div>

   <div className="flex flex-col gap-6">
  <div className="relative">
    <img 
      className="h-[270px] w-full object-cover rounded-lg"
      src="/images/third.png"
      alt="Third Image"
    />
  </div>
  
  <div className="relative">
    <img 
      className="h-[270px] w-full object-cover rounded-lg"
      src="/images/second.png"
      alt="Second Image"
    />
  </div>
</div>


  </div>
 </div>
  )
}

export default Hero
