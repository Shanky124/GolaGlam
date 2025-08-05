import React from 'react'

const Nesletterbox = () => {
   const Onsubmithandler =(event)=>{
    event.preventdefault();
   }
  return (
    <div className='text-center '>
<p className='text-2xl font-medium text-gray-700'> Subscribe now & get 20% off.</p>
<p className='mt-3 text-gray-600'>Online shopping experience that appeals to trendsetters in the fashion industry. </p>
  <form onSubmit={Onsubmithandler} className='flex items-center gap-3 sm:w-1/2 w-full mx-auto my-6 border pl-3'>
  <input className='w-full outline-none sm:flex-1/2' type='email' placeholder='Enter Your Email' required/>
  <button type='submit' className='bg-black text-white text-sm py-4 px-9 '>SUBSCRIBE</button>
    </form>  

    </div>
  )
}

export default Nesletterbox;


