import React from 'react';
import styles from './Modal.module.css';
import { AiFillStar, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../redux/bookmarkSlice';
import globalToken from '../../tokens/global.json';

export default function Modal(props) {
  const { modalData, setModal } = props;
  const { id, title, brand_name, image_url, brand_image_url } = modalData;
  const { BookmarkStar } = globalToken;

  const handleClose = (event) => {
    event.stopPropagation();
    setModal(false);
  };
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const isBookmarked = useSelector((state) => state.bookmark.isBookmarked);
  const dispatch = useDispatch();
  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    dispatch(toggleBookmark(modalData));
  };

  return (
    <section
      className={styles.modal_wrap}
      onClick={handleClose}
    >
      <div
        className={styles.modal}
        onClick={handleModalClick}
      >
        <img
          src={image_url || brand_image_url}
          alt={title || brand_name}
        />
        <div className={styles.bookmark}>
          <button
            className={styles.bookmark_btn}
            onClick={handleBookmarkClick}
          >
            {isBookmarked.some((item) => item.id === id) ? (
              <AiFillStar
                color={BookmarkStar.color.on}
                size='24'
              />
            ) : (
              <AiFillStar
                color={BookmarkStar.color.off}
                size='24'
              />
            )}
          </button>
          <span className={styles.name}>{title || brand_name}</span>
        </div>
        <button
          className={styles.close}
          onClick={handleClose}
        >
          <AiOutlineClose
            color='#FFF'
            size='23'
          />
        </button>
      </div>
    </section>
  );
}
