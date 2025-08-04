import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Dropdown_icon from "../assets/dropdown_icon.png"
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products} = useContext(ShopContext);
  const[showFilter,setshowFilter]=useState(false);
  const [filterproducts,setfilterproducts]=useState([]);
const [category,setcategory]=useState([]);
const [subCategory,setsubCategory]=useState([]);
const[sorttype,setsorttype]=useState('relevant');
const togglecategory =(e)=>{
  if (category.includes(e.target.value)){
    setcategory(prev=>prev.filter(item => item !==e.target.value))
  }
  else{
    setcategory(prev=>[...prev,e.target.value])
  }
}

const togglesubCategory =(e)=>{
  if (subCategory.includes(e.target.value)){
    setsubCategory(prev=>prev.filter(item => item !==e.target.value))
  }
  else{
    setsubCategory(prev=>[...prev,e.target.value])
  }
}
const applyfilter = () => {

  let productscopy = products.slice();

  if (category.length > 0){
    productscopy=productscopy.filter(item=> category.includes(item.category));
  }

if (subCategory.length > 0){
    productscopy=productscopy.filter(item=> subCategory.includes(item.subCategory));
  }

  setfilterproducts(productscopy);
}
const sortproduct=()=>{
  let fp=filterproducts.slice();
  switch(sorttype){
    case 'low-high':setfilterproducts(fp.sort((a,b)=>(a.price-b.price)));
break;
 case 'high-low':setfilterproducts(fp.sort((a,b)=>(b.price-a.price)));
break;
default:
  applyfilter();
  break;
  }
}

 // useEffect(()=>{
 //   setfilterproducts(products)},[]);
useEffect(()=>{
    applyfilter();
  }, [category,subCategory])

useEffect(()=>{
  sortproduct();  
  }, [sorttype])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt:10 border-t '>
  
      {/*filtroption*/}
      <div className='min-w-60'>
<p onClick={()=> setshowFilter(!showFilter)}  className='my-2 text-xl flex items-center cursor-pointer'>FILTERS
  <img className={` pl-3 h-6 sm:hidden invert brightness-200  ${showFilter ?'rotate-90': ''}`} src={Dropdown_icon} alt="" />
</p>
{/*catgry filtr*/}
 <div className={` border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden" } sm:block`}>
  <p className='mb-3 font-medium text-md'>CATEGORIES</p>
  <div className="gap-2 flex flex-col text-md font-light text-gray-700">
    <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Men'} onChange={togglecategory} />Men
    </p>
 <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Women'} onChange={togglecategory} />Women
    </p>
 <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Kids'} onChange={togglecategory} />Kids
    </p>

  </div>
</div>
{/*subcatgry filtr*/}
<div className={` border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden" } sm:block`}>
  <p className='mb-3 font-medium text-md'>TYPE</p>
  <div className="gap-2 flex flex-col text-md font-light text-gray-700">
    <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Topwear'} onChange={togglesubCategory}/>Topwear
    </p>
 <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Bottomwear'} onChange={togglesubCategory} />Bottomwear
    </p>
 <p className='gap-2 flex'>
      <input className='w-4' type='checkbox' value={'Winterwear'} onChange={togglesubCategory} />Winterwear
    </p>

  </div>
</div>
</div>
{/*right sid*/}
<div className="flex-1 ">
<div className="flex justify-between text-base sm:text-2xl mt-4 mb-4">
  <Title  text1={"ALL"} text2={"COLLECTIONS"} noLeftLine  />
{/*product sort*/}
<select onChange={(e)=>setsorttype(e.target.value)} className='border-2 border-gray-400  txt-md px-1 py-2 w-full max-w-[180px] sm:max-w-xs'>
  <option value="relevant">Sort by:Relevant</option>
  <option value="low-high">Sort by:Low to High</option>
  <option value= "high-low">Sort by:High to Low</option>
</select>
</div>
{/*to display all product*/}
<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
{
filterproducts.map((item,index)=>(
  < ProductItem key={index}  name={item.name}  image={item.image} price={item.price}  id={item._id} />
))
}
</div>
</div>
  </div>
  )
}

export default Collection;






