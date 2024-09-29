
import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { remove } from '../redux/slice/Cartslice';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='flex flex-col rounded-lg p-4'>  
      <div className='flex flex-row items-center'>  
        <div className='w-1/3 mr-4 h-[180px]'>
          <img src={item.image} alt="" className='h-full w-full' />  
        </div>
        <div className='flex flex-col mb-20'>
          <h1 className='text-gray-700 font-bold text-lg'>{item.title}</h1>
          <p className='text-gray-400 font-normal text-sm'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</p>
          <div className='flex flex-row justify-between items-center mt-2'>
            <p className='text-green-600 font-extrabold'>${item.price}</p>
            <div onClick={removeFromCart} className='bg-red-300 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>  
              <FcDeleteDatabase className='text-lg text-white' />
            </div>
          </div>
        </div>
      </div>
     <div className='h-0.5 mt-5 w-full bg-black'></div>
    </div>
  )
}

export default CartItem


