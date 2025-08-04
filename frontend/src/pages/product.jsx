import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';
import star_icon  from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import Relatedproducts from '../components/Relatedproducts';
const product = () => {
  const {productId}= useParams();
  console.log(productId);
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productData,setproductData]=useState(null);
  const[image,setImage]=useState('')
  const[size,setSize]= useState('')

  const fetchproductData=async ()=>{
products.map((item)=>{
  if (item._id === productId){
    setproductData(item)
    setImage(item.image[0])
    return null;
  }
})
  }
  useEffect(()=>{
    fetchproductData();
  },[productId,products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
 {/*product data */}
<div className="flex gap-12 sm:gap-12 sm:flex-row flex-col">
{/*product img */}

<div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
<div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18%]">
  {
    productData.image.map((item,index)=>(
      <img onClick={()=>setImage(item)}  key={index} src={item}  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '  alt="" />
    ))
  } 
</div>
<div className="w-full sm:w-[80%]">
  <img className='w-full h-auto' src={image} alt="" />
</div>
</div>
{/* product infooo  */}
<div className="flex-1">
  <h1 className='font-medium text-2xl mt-2 '>{productData.name}</h1>
  <div className="gap-1 mt-2 flex items-center">
    <img src={star_icon} alt="" className="w-3.5" />
    <img src={star_icon} alt="" className="w-3.5" />
    <img src={star_icon} alt="" className="w-3.5" />
    <img src={star_icon} alt="" className="w-3.5" />
    <img src={star_dull_icon} alt="" className="w-3.5" /> 
    <p className='pl-2 '>(124)</p>
  </div>
  <p className='mt-5 text-3xl font-medium'> {currency} {productData.price}  </p>
  <p className='mt-5 text-gray-800 md:w-4/5'>  {productData.description} </p>
  <div className="flex flex-col gap-4 my-8">
    <p>Select Size</p>
    <div className="gap-2 flex">
      {productData.sizes.map((item,index)=>(
        <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item==size ? 'border-orange-500' : '' }`} key={index}>{item} </button>
      ))}
    </div>
  </div>
  <button onClick={()=>addToCart(productData._id,size)} className='bg-black px-8 py-3 text-white active:bg-gray-700'>ADD TO CART</button>
  <hr className='mt-8 sm:w-4/5 '/>
  <div className="text-md text-gray-700 mt-5 flex flex-col gap-1">
<p>100% Original Product.</p>
<p>Cash on Delivery is available on this product.</p>
<p>Easy return and exchange policy within 7 days.</p>

  </div>
</div>
</div>
{/*descption and reviw */}
<div className="mt-20">
  <div className="flex">
    <b className=' border px-5 py-3 text-sm'>Description</b>
    <p className=' border px-5 py-3 text-sm'>Reviews (125)</p>
</div>
<div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
  <p>Welcome to GolaGlam - your one-stop destination for fashion that's bold, elegant, and timeless. Discover our latest collections and shop the styles that define you. Fast shipping, easy returns, and unmatched quality.
Explore our curated collection of stylish clothing and accessories. From everyday essentials to statement pieces, we have something for every mood, every moment, and every season.
</p>
</div>
</div>
{/*disply rlatd products. */}
<Relatedproducts
  category={productData.category}
  subCategory={productData.subCategory}
/>

    </div>
    
  ) : <div className='opacity-0'></div>
  
}

export default product;