import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const product = action.payload;
      state.push(product);
      // localStorage에 북마크를 저장
      localStorage.setItem('bookmarks', JSON.stringify(state));
    },
    removeBookmark: (state, action) => {
      const productId = action.payload;
      // 북마크를 제거
      state = state.filter((item) => item.id !== productId);
      // localStorage에서 북마크를 업데이트합니다.
      localStorage.setItem('bookmarks', JSON.stringify(state));
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
