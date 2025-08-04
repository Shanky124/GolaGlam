import React, { useState } from 'react'

const login = () => {
  const[currentstate,setcurrentstate]=useState('Sign Up');
  const onSubmitHandler=async (event)=>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center  gap-4 mt-14 m-auto w-[90%] sm:max-w-96 text-gray-800'>
    <div className='inline-flex items-center gap-2 mb-4 mt-10'>
        <p className='prata-regular text-3xl'>{currentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
 {currentstate ==='Login' ?'': <input  type="text" className='w-full px-3 py-2 border border-gray-900 rounded ' placeholder='Full Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Email' required/>
     <input type="password" className='w-full px-3 py-2 border border-gray-800 rounded' placeholder='Password' />
   <div className=" w-full justify-between text-sm mt-[-8px] ">
<p className='text-xl '>Forgot your password?</p>
{
  currentstate==='Login'
   ? <p onClick={()=>setcurrentstate('Sign Up')}  className='cursor-pointer text-xl bg-blue-50  border mt-2 border-blue-600 px-2 py-1 rounded inline-block '>Create account</p>
   : <p onClick={()=>setcurrentstate('Login')}  className='cursor-pointer text-xl border bg-blue-50 mt-1 border-blue-600 px-2 py-1 rounded inline-block'>Login Here</p>
}
   </div>
<button className='text-white bg-blue-500 text-2xl px-8 mt-4 py-2 rounded  '> {currentstate==='Login' ? 'Sign In': 'Sign Up'}  </button>
    </form>
  )
}

export default login;

