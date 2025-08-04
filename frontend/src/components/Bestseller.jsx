import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
    const {products} =useContext(ShopContext);
    const [bestseller,setBestseller]=useState([]);

useEffect(()=>{
    const Bestproduct= products.filter((item)=>(item.bestseller));
    setBestseller(Bestproduct.slice(0,5))
},[])

  return (
<div className='my-10'>
    <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"}/>
        <p className='text-gray-600 m-auto sm:text-sm md:text-base text-sm w-3/4'>
 Designed with modern elegance and everyday comfort in mind,our handpicked collection of trending dresses.
        </p>
    </div>
<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 font-medium'>


{bestseller.map((item,index) => {
    return(
  <ProductItem
   key={index} 
   id={item.id} 
   name={item.name} 
   image={item.image} 
   price={item.price}  
   />
);
})}
</div>
</div>
  )
}

export default Bestseller;



