import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (count) => {
    const response = await fetch(
      `http://cozshopping.codestates-seb.link/api/v1/products?count=${count}`
    );
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
