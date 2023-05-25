import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Toast from '../components/Toast/Toast';
import { TOAST_MESSAGES } from '../page/BookMark/toastMessage';
import globalToken from '../tokens/global.json';

// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
const { BookmarkStar } = globalToken;

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

        toast(
          <Toast
            message={TOAST_MESSAGES.bookmarkRemoved}
            color={BookmarkStar.color.off}
          />
        );
      } else {
        // 새로운 상품을 북마크하는 경우 추가
        state.isBookmarked.push(payload);

        toast(
          <Toast
            message={TOAST_MESSAGES.bookmarkAdded}
            color={BookmarkStar.color.on}
          />
        );
      }

      localStorage.setItem('bookmark', JSON.stringify(state.isBookmarked));
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
