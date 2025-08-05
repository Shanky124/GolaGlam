import React from 'react'
import go from "../assets/go.png"
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row text-sm gap-10 lg:gap-60 mt-20 mb-10 '>
                <div>
                    <img src={go} alt="" className='mb-10 w-60 -mt-8' />
                    {/*   <p className=' text-gray-600 md:w-2/3 mb-60 '>
                   Elevate your wardrobe with our handpicked collection of trending dresses.
 Designed with modern elegance and everyday comfort in mind.
  </p> */}
                </div>
                <div>
                    <p className=' text-xl font-medium mb-5 '>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-lg text-gray-700'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
<div >
<p className='text-xl font-medium mb-5 '>Get In Touch</p>
<ul className='gap-1 flex flex-col text-lg text-gray-700'>
  <li> <span>Contact </span>+8959042266</li>
    <li><span>Email - </span>contact@golaglamredefined.com</li>
</ul>
</div>
              </div>
              <div>
                <hr/>
                <p className='py-5 text-center text-lg'>Copyright @2025 GolaGlam - All Rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer