//import React, { useContext } from 'react'
//import { ShopContext } from '../context/Shopcontext'
//import Title from '../components/Title'

//const orders = () => {
////  const {currency,products}=useContext(ShopContext)
//const { orderDetails } = useContext(ShopContext);

 // return (
//    <div className='border-t pt-16'>
//<div className="text-2xl">
 // <Title text1={'MY'} text2={'ORDERS'}/>
//</div>


//
   // </div>
 // )
////}

//export default orders;
import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from '../components/Title';

const Orders = () => {
  const { orderDetails, products, currency, delivery_fee } = useContext(ShopContext);

  if (!orderDetails) {
    return (
      <div className='border-t pt-16 text-center'>
        <Title text1="NO" text2="ORDERS" />
        <p className='text-gray-500 mt-4'>You haven't placed any orders yet.</p>
      </div>
    );
  }

  const { deliveryInfo, cartItems, paymentMethod, placedAt } = orderDetails;

  // Get product by ID
  const getProduct = (productId) => {
    return products.find(p => p._id === productId);
  };

  // Calculate subtotal
  let subtotal = 0;

  return (
    <div className='border-t pt-16 px-5 max-w-2xl mx-auto'>
      <Title text1="MY" text2="ORDERS" />

      <div className='mt-6 border p-4 rounded-md shadow-sm bg-white'>
        <h3 className='font-semibold mb-2'>Delivery Info:</h3>
        {Object.entries(deliveryInfo).map(([key, value], index) => (
          <p key={index}><strong>{key}:</strong> {value}</p>
        ))}

        <h3 className='mt-4 font-semibold mb-2'>Payment Method:</h3>
        <p className='capitalize'>{paymentMethod}</p>

        <h3 className='mt-4 font-semibold mb-2'>Items:</h3>
        {Object.entries(cartItems).map(([productId, sizes], i) => {
          const product = getProduct(productId);
          if (!product) return null;

          return (
            <div key={i} className='flex items-center gap-4 mb-4 border-b pb-3'>
              <img src={product.image} alt={product.name} className='w-16 h-16 object-cover rounded' />
              <div>
                <p className='font-medium'>{product.name}</p>
                {Object.entries(sizes).map(([size, qty], j) => {
                  subtotal += qty * product.price;
                  return (
                    <p key={j} className='text-sm text-gray-600'>
                      Size: {size} × {qty} = {currency}{qty * product.price}
                    </p>
                  );
                })}
                <p className='text-sm text-gray-500 mt-1'>Price: {currency}{product.price} each</p>
              </div>
            </div>
          );
        })}

        <h3 className='mt-4 font-semibold mb-2'>Summary:</h3>
        <p>Subtotal: {currency}{subtotal}</p>
        <p>Delivery Fee: {currency}{delivery_fee}</p>
        <p className='font-semibold'>Total: {currency}{subtotal + delivery_fee}</p>

        <p className='mt-4 text-sm text-gray-500'>Ordered at: {new Date(placedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Orders;
