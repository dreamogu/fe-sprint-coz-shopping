import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import bookmarkReducer from './bookmarkSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
