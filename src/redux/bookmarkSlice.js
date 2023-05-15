import { createSlice } from '@reduxjs/toolkit';

const initial = 0;
const bookmarkSlice = createSlice({
  name: 'product',
  initialState: initial,
  reducers: {
    add: (state, action) => {
      state.value = state.value + action.payload;
      // 제이슨으로 변경하는거 추가
    },
  },
});

export default bookmarkSlice;
export const { add } = bookmarkSlice.actions;
