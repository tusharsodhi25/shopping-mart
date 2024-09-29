import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/Cartslice'; // Import the reducer from the slice

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use cartReducer to handle cart state
  },
});
