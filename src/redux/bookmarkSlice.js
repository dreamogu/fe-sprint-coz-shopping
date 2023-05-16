import { createSlice } from '@reduxjs/toolkit';

function getInitialBookmarks() {
  const storedBookmarks = localStorage.getItem('bookmark');
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
}

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: {
    isBookmarked: getInitialBookmarks(),
  },
  reducers: {
    toggleBookmark: (state, action) => {
      const { payload } = action;

      const isBookmarked = state.isBookmarked.some(
        (item) => item.id === payload.id
      );
      if (isBookmarked) {
        // 이미 북마크된 상품인 경우 제거
        state.isBookmarked = state.isBookmarked.filter(
          (item) => item.id !== payload.id
        );
      } else {
        // 새로운 상품을 북마크하는 경우 추가
        state.isBookmarked.push(payload);
      }

      localStorage.setItem('bookmark', JSON.stringify(state.isBookmarked));
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
