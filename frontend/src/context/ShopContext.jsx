import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import product from "../pages/product";
import { useNavigate } from "react-router-dom";

// export const ShopContext=createContext();
 const ShopContext = createContext();

 const ShopContextProvider =(props)=>{
    const currency = '₹';
const delivery_fee= 10;
const [search,setsearch]=useState('');
const [showsearch,setshowsearch]=useState(true)
const[cartItems,setCartItems]=useState({});
const navigate= useNavigate();


const [orderDetails, setOrderDetails] = useState(null); //  Add this

const placeOrder = (orderData) => {
  setOrderDetails(orderData);
  setCartItems({}); // Clear cart after placing order (optional)
};

//

const addToCart=async (itemId,size)=>{
if (!size){
toast.error('Select Product Size');
return;


}
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]) {
        if (cartData[itemId][size]){
            cartData[itemId][size]+=1;
        }
        else{
            cartData[itemId][size]=1;
        }
    }
    else {
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    setCartItems(cartData);
}
useEffect(()=>{
console.log(cartItems);
},[cartItems])
//logic for totalcartcounnt itms.
const getCartCount= ()=>{
    let totalCount=0;
    for (const items in cartItems){
for (const item in cartItems[items]){
    try {
        if (cartItems[items] [item] >0){
totalCount +=cartItems[items][item];
        }
    } catch (error ){

    }
}
    }
return totalCount;
}
const updatequantity = async (itemId,size,quantity)=>{
    let cartData= structuredClone (cartItems);
    cartData[itemId][size]=quantity;
setCartItems(cartData);
}

const getCartAmount= () =>{
let totalAmount=0;
for (const items in cartItems){
    let itemInfo=products.find((product)=>product._id===items);
    for (const item in cartItems [items]){
        try {
            if (cartItems[items][item]>0) {
                totalAmount+=itemInfo.price*cartItems[items][item];
            }
        }catch (error){ }
    }
}
return totalAmount;


}


    const value= {
        products,currency,delivery_fee,search,setsearch,showsearch,setshowsearch,
        cartItems,addToCart,getCartCount,updatequantity,getCartAmount,navigate,orderDetails,
placeOrder
    }

return (
    <ShopContext.Provider value={value}>
    {props.children}
    </ShopContext.Provider>
)

 }
 export { ShopContext };
 export default ShopContextProvider;
