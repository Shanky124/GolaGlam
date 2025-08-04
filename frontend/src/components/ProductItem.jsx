import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link className='cursor-pointer text-gray-700' to={`/products/${id}`}>
        <div className='overflow-hidden  rounded-sm'>
          <img
            src={image}
            alt={name}
            className='hover:scale-110 transition ease-in-out duration-300 w-full h-auto object-cover'
          />
        </div>
        <p className='pt-3 pb-1  text-md font-medium'>{name}</p>
        <p className='text-sm font-medium'>
          {currency}{price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
