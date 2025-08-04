import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Nesletterbox from '../components/Nesletterbox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
<Title  text1={'CONTACT'} text2={'US'}  />
      </div>
      <div className="my-10 flex flex-col justify-center gap-10 md:flex-row mb-28">
<img className='w-full md:max-w-[480px]  ' src={assets.contact_img} alt="" />
    
      <div className="flex flex-col justify-center gap-6 items-start "> 
<p className='text-xl font-semibold text-gray-800'>Our Store </p>
<p className='text-gray-700'>138,Export Promotion Industrial Park,<br/> Whitefield Road,Bangalore (INDIA)-560066</p>
<p className='text-gray-700'>Tel: (415) 555-23422   <br/> Email: admin@golaglamredefined.com  </p>
<p className='text-xl font-semibold text-gray-800'>Careers at GolaGlam</p>
<p className='text-gray-700'>Learn more about our teams and job openings.</p>
<button className='border bg-blue-400 px-8 py-4 text-white rounded'>Explore Jobs</button>
</div>
      </div>
      <Nesletterbox/>
    </div>
  )
}

export default Contact;
// itms-start in 14 line not vrtittn