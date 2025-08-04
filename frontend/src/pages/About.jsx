import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Nesletterbox from '../components/Nesletterbox';

const About = () => {
  return (
    <div>
<div className="text-center border-t text-2xl pt-8 ">
<Title text1={'ABOUT'} text2={'US'} />
</div>
<div className="flex flex-col my-10 gap-16 md:flex-row">
<img className='w-full md:max-w-[500px]' src={assets.about_img} alt="" />

 <div className="flex flex-col pb-10 justify-center gap-6 text-gray-700 md:w-2/4">
    <p className=" text-xl md:text-xl  leading-relaxed font-serif">
      At <strong>Golaglam</strong>, we believe fashion is more than just clothing. We bring you the latest in trendy and affordable dresses that turn everyday moments into runway moments.
       Whether you're dressing up for a party or keeping it casual, our handpicked collections reflect confidence, style, and modern flair.
        Driven by quality and inspired by global fashion, Golaglam is your go-to destination for all things elegant.
    </p>
    
    <p className="text-xl  md:text-xl  leading-relaxed font-serif">
      <strong>Golaglam</strong> is your ultimate fashion destination for trendy and stylish dresses.
       We blend quality with the latest trends to offer outfits that fit your vibe — bold, elegant, or effortlessly cool. 
       Our goal is to help you express yourself through fashion that feels as good as it looks.
    </p>
    <b className='text-gray-800 text-3xl'>Our Mission</b>
    <p className='text-xl  md:text-xl  leading-relaxed font-serif'>Our mission is to help you express yourself through fashion that feels as good as it looks.Driven by quality and inspired by global fashion, Golaglam is your go-to destination for all things elegant.</p>
  </div>
</div>
<div className="text-xl py-4">
  <Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>

<div className="flex flex-col mb-20 text-sm md:flex-row">
  <div className="border px-10 py-8 flex flex-col gap-5 md:px-16 sm:py-20 ">
<b className='text-xl'>Quality Assurance:</b>
<p className='text-gray-600'>We meticulously select and vet each product it meets our stringment shopping, ordering process,quality standard.</p>
  </div>
 <div className="border px-10 py-8 flex flex-col gap-5 md:px-16 sm:py-20 ">
<b className='text-xl'>Convenience:</b>
<p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process,quality standard.</p>
  </div>
<div className="border px-10 py-8 flex flex-col gap-5 md:px-16 sm:py-20 ">
<b className='text-xl'>Exceptional Customer Service:</b>
<p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring user-friendly interface and hassle-free.</p>
  </div>
</div>

<Nesletterbox/>
  </div>
  )
}
export default About;
