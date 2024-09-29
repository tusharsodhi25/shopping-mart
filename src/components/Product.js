

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { add, remove } from '../redux/slice/Cartslice';

const Product = ({ post }) => {
  // Make sure 'cart' is being fetched from the right part of the state
  const cart = useSelector((state) => state.cart.cart); // Double-check this structure

  const dispatch = useDispatch();

  const addTocart = () => {
    dispatch(add(post));
    toast.success('Item added to cart');
  };

  const removeFromcart = () => {
    dispatch(remove(post.id));
    toast.error('Item removed from cart');
  };

  return (
    <div className='flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 
    ml-5 rounded-xl border  hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
    '>
      <div>
        <p className='text-gray-700 font-semibold
        text-lg w-40 truncate text-left mt-3 '>{post.title.split(" ").slice(0,3).join(" ")+"..."}</p>
      </div>

      <div>
        <p className='w-40 text-gray-400 font-normal text-left
        text-[10px]'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt="" className='h-full w-full' />
      </div>

    
     <div className='flex justify-between gap-11 items-center
     w-full mt-5 '>

     <div>

    <p className='text-green-600 font-bold'>${post.price}</p>
    </div>


      {cart && cart.some((p) => p.id === post.id) ? (
      <button
      className='text-gray-700 border-2 border-gray-700
      rounded-full font-semibold text-[12px] p-1 px-3 uppercase
      hover:bg-gray-700 hover:text-white
      transition duration-300 ease-in'
       onClick={removeFromcart}>Remove Item</button>
      ) : (
      <button
      className='text-gray-700 border-2 border-gray-700
      rounded-full font-semibold text-[12px] p-1 px-3 uppercase
      hover:bg-gray-700 hover:text-white
      transition duration-300 ease-in'
      
      onClick={addTocart}>Add to Cart</button>
     )}
    </div>


     </div>
      
  );
};

export default Product;
