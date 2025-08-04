import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import Carttotal from '../components/Carttotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/Shopcontext';

const placeorder = () => {
const [method,setmethod]=useState('cod');
const {cartItems, placeOrder,navigate} =useContext(ShopContext);
//

  const handlePlaceOrder = () => {
    const inputs = document.querySelectorAll('input');
    const deliveryInfo = {};
    inputs.forEach(input => {
      deliveryInfo[input.placeholder] = input.value;
    });

    const orderData = {
      deliveryInfo,
      cartItems,
      paymentMethod: method,
      placedAt: new Date().toISOString(),
    };

    placeOrder(orderData);
    navigate('/order');
  };
//
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 border-t  '>{/**min-h-[80vh] */}
      {/**lft side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} noLeftLine />
        </div>
        <div className="flex gap-3 ">
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='First Name' />
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='Last Name' />
        </div>
        <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='Email address' />
        <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='Flat,House no.,Apartment,Bulding' />
        <div className="flex gap-3 ">
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='City' />
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='State' />
        </div>
        <div className="flex gap-3 ">
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='number' placeholder='Pincode' />
          <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='text' placeholder='Country' />
        </div>
        <input className='border border-gray-500 rounded w-full py-1.5 px-3.5' type='number' placeholder='Phone Number' />
      </div>
      {/** right sid */}
      <div className='mt-8'>
        <div className="mt-8 min-w-80">
          <Carttotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} noLeftLine/>
          {/**pymt mthod slction  */}
          <div className="flex gap-3 flex-col lg:flex-row ">
            <div onClick={()=>setmethod('stripe')} className="flex cursor-pointer items-center gap-3 border p-2 px-3 ">
<p    className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? 'bg-green-400' : ''}`}  ></p>
<img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
             <div onClick={()=>setmethod('razorpay')}className="flex cursor-pointer items-center gap-3 border p-2 px-3 ">
<p  className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'razorpay'  ? 'bg-green-400' : ''}`} ></p>
<img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
             <div onClick={()=>setmethod('cod')}className="flex cursor-pointer items-center gap-3 border p-2 px-3 ">
<p  className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'? 'bg-green-400' : ''}`} ></p>
<p className='text-gray-800 font-medium text-sm mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="text-end w-full mt-8 ">


        
          
         <button onClick={handlePlaceOrder} className='bg-black text-white text-sm px-16 py-3'> PLACE ORDER </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default placeorder;


