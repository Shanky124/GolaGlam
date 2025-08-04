import React, { useContext, useState } from 'react'
import Go from "../assets/go.png"
import { Link, NavLink } from 'react-router-dom'
import search_icon from '../assets/search_icon.png'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'
import menu_icon from '../assets/menu_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import { ShopContext } from '../context/Shopcontext'

const Navbar = () => { const [visible,setVisible]=useState(false);
  const {getCartCount}=useContext(ShopContext);
  return (
  
    <div className='flex items-center justify-between py-0.5 font-medium '> 
    <Link to='/'><img src={Go} className='h-35 '/></Link>
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
<NavLink  to='/' className=' group flex flex-col items-center gap-1 '>
<p className=' text-lg'>HOME</p>
<hr className="border-none w-2/4 h-[3px] bg-transparent group-hover:bg-rose-500 "/>
</NavLink>
<NavLink  to='/collection' className=' group flex flex-col items-center gap-1 '>
<p className='text-lg'>COLLECTION</p>
<hr className='border-none w-2/4 h-[3px]bg-transparent group-hover:bg-rose-500  '/>
</NavLink>
<NavLink  to='/about' className=' group flex flex-col items-center gap-1 '>
<p className='text-lg'>ABOUT</p>
<hr className='border-none w-2/4 h-[3px]bg-transparent group-hover:bg-rose-500 '/>
</NavLink>
<NavLink  to='/contact' className=' group flex flex-col items-center gap-1 '>
<p className='text-lg'>CONTACT</p>
<hr className='border-none w-2/4 h-[3px]bg-transparent group-hover:bg-rose-500 '/>
</NavLink>
</ul>
  <div className='flex items-center gap-6'>  
<img src={search_icon} alt="" className='w-6 cursor-pointer' />
<div className='group relative'>
<Link to='/login'><img  src={profile_icon} alt="" className='w-6 cursor-pointer' /></Link>
<div className=' group-hover:block hidden absolute dropdown-menu pt-4 right-0 '>
<div className='flex flex-col gap-2 px-5 py-3 w-36 bg-slate-100 text-gray-500 rounded '>
 <p className='cursor-pointer hover:text-black'>My Profile</p>
 <p className='cursor-pointer hover:text-black'>Orders</p>
 <p className='cursor-pointer hover:text-black'>Logout</p>
</div>
</div>
</div>
<Link  to='/cart' className='relative'>
<img src={cart_icon} alt="" className='w-6'/>
<p className='absolute right-[-4px] bottom-[-4px] text-center w-4 leading-4  bg-gray-900 text-white aspect-square rounded-full txt-[1px]'>{getCartCount()}</p>
</Link> 
<img onClick={()=>setVisible(true)} src={menu_icon} alt="" className='cursor-pointer w-6 sm:hidden'/>
  </div>
{/*sidebar menu for sm screen*/}
  <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} `}>
<div className="flex flex-col text-gray-600">
<div onClick={()=> setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer ">
<img className='h-3 rotate-180' src={dropdown_icon} alt="" />
<p>Back</p>
</div>
<NavLink onClick={()=> setVisible(false)} className=' py-2 pl-6 border' to='/'>HOME</NavLink>
<NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
<NavLink onClick={()=> setVisible(false)}  className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
<NavLink onClick={()=> setVisible(false)}  className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
</div>
  </div>

    </div>
  )
}

export default Navbar;



