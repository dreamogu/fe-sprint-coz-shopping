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
      state.isBookmarked = state.isBookmarked.includes(payload)
        ? state.isBookmarked.filter((id) => id !== payload)
        : [...state.isBookmarked, payload];
      localStorage.setItem('bookmark', JSON.stringify(state.isBookmarked));
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
