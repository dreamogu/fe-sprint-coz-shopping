import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import bookmarkReducer from './bookmarkSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    bookmarks: bookmarkReducer,
  },
});

export default store;
