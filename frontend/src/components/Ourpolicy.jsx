import React from 'react'
import exchange_icon from "../assets/exchange_icon.png"
import quality_icon from "../assets/quality_icon.png"
import support_img from "../assets/support_img.png"
const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700 '>
    <div>
<img src={exchange_icon}  alt=""  className='mb-5 m-auto w-12'/>
<p className='font-semibold'>Easy Exchange Policy.</p>
<p className='text-gray-500'>we offer hassle free exchange policy.</p>
    </div>
  <div>
<img src={quality_icon}  alt=""  className='mb-5 m-auto w-12'/>
<p className='font-semibold'>7 Days Return Policy.</p>
<p className='text-gray-500'>we provide hassle free return policy.</p>
    </div>
  <div>
<img src={support_img}  alt=""  className='mb-5 m-auto w-12'/>
<p className='font-semibold'>Best Customer Support.</p>
<p className='text-gray-500'>we offer 24*7 customer support.</p>
    </div>

    </div>
  )
}

export default Ourpolicy;