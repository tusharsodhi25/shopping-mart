import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart} = useSelector((state)=>state.cart);
  return (
    <div>
      <nav className='flex items-center h-20 max-w-10xl justify-between bg-slate-900 '>

        <NavLink to='/'>
        <div className='ml-40'>

        <img src={logo} alt='' className='h-12'/>

        </div>
       
        </NavLink>


       
        <div className='flex items-center font-md text-slate-100 space-x-6 mr-40'>
          <NavLink to='/'>
          <p>Home</p>
          </NavLink>
           <NavLink to='/cart'>

            <div className='relative '>
            <FaShoppingCart className='text-2xl'/>
            {
              cart.length > 0 &&

              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 flex justify-center items-center
               animate-bounce text-white
               h-5  rounded-full'>{cart.length}</span>

            }
            
            </div>
           </NavLink>
           
        </div>

      </nav>
    </div>
  )
}

export default Navbar
