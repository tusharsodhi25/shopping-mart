
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='flex flex-col h-screen ml-20'>
      {cart.length > 0 ? (
        <div className='flex flex-col md:flex-row'>
          {/* Left side: Cart items */}
          <div className='flex flex-col w-full md:w-1/2 p-4'>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right side: Checkout */}
          <div className='flex flex-col justify-start w-full md:w-1/2 p-4 mt-4'>
            <div className='text-green-700 font-semibold text-lg'>Your Cart</div>
            <div className='text-green-700 font-extrabold text-[2rem] uppercase'>Summary</div>
            <p className='font-semibold '>
              <span>Total Items: {cart.length}</span>
            </p>

            <div className='flex flex-col gap-y-4 mt-auto'>
              <p className='font-semibold'>
                Total Amount:<span className='font-extrabold'>${totalAmount}</span>
              </p>

              <button className='bg-green-700 text-white p-2 rounded-md px-3 w-full md:w-[400px] mb-3'>
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex  flex-col justify-center items-center h-screen'>
          <h1>Cart is Empty !!!</h1>
          <Link to="/">
            <button  className='bg-green-700 text-white p-2 rounded-md mt-2'>Shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


