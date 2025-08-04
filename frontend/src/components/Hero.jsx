import React from 'react'
import hero_img from '../assets/hero_img.png'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/*hro lft side*/}
      <div className="items-center justify-center py-10 flex sm:py-10 sm:w-1/2 w-full  ">
        <div className="text-[#414141]">
          <div className="gap-2 items-center flex">
            <p className='bg-[#414141] h-[2px] w-8 md:w-11'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
          </div>
          <h1 className='prata-regular lg:text-5xl leading-relaxed text-3xl sm:py-3'>Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className='font-semibold text-sm md:text-base '>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/*hro right sid */}
      <img className='w-full sm:w-1/2' src={hero_img} alt="" />
    </div>
  )
}

export default Hero;