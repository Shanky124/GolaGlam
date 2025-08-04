import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className="py-8 text-2xl text-center">
      <Title text1={'LATEST'} text2={'COLLECTIONS'} />
       <p className='text-xs text-gray-500 m-auto w-3/4 md:text-base sm:text-sm'> 
  Elevate your wardrobe with our handpicked collection of trending dresses.
 Designed with modern elegance and everyday comfort in mind, these styles are your new go-to.
        </p> 
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
        {LatestProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image[0]}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Latestcollection;
