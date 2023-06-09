import React, { useState } from 'react';
import styles from './Product.module.css';
import { AiFillStar } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../redux/bookmarkSlice';
import globalToken from '../../tokens/global.json';

export default function Product(props) {
  const isBookmarked = useSelector((state) => state.bookmark.isBookmarked);
  const dispatch = useDispatch();
  const { BookmarkStar } = globalToken;

  const {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = props;
  const formattedPrice = price
    ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '';
  const formattedFollower = follower
    ? follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : '';

  // 모달
  const [modal, setModal] = useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };
  const modalData = {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  };

  // 북마크
  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    dispatch(toggleBookmark(props));
  };

  // info 부분 변수
  let productInfo;
  switch (type) {
    case 'Product':
      productInfo = (
        <div className={styles.product_detail}>
          <div className={styles.product_title}>
            <h3>{title}</h3>
          </div>
          <div className={styles.product_info}>
            <div className={styles.discount}>{discountPercentage}%</div>
            <div>{formattedPrice}원</div>
          </div>
        </div>
      );
      break;
    case 'Category':
      productInfo = (
        <div className={styles.product_detail}>
          <div className={styles.product_title}>
            <h3># {title}</h3>
          </div>
        </div>
      );
      break;
    case 'Exhibition':
      productInfo = (
        <div className={styles.product_detail}>
          <div className={styles.product_title}>
            <h3>{title}</h3>
            <div>{sub_title}</div>
          </div>
        </div>
      );
      break;
    case 'Brand':
      productInfo = (
        <div className={styles.product_detail}>
          <div className={styles.product_title}>
            <h3>{brand_name}</h3>
          </div>
          <div className={styles.product_info}>
            <div className={styles.follwer}>관심고객수</div>
            <div>{formattedFollower}명</div>
          </div>
        </div>
      );
      break;
    default:
      return null;
  }
  return (
    <>
      <li
        key={id}
        className={styles.product_item}
        onClick={handleModalOpen}
      >
        <div className={styles.product_img}>
          <img
            src={image_url || brand_image_url}
            alt={title || brand_name}
          />
          <button onClick={handleBookmarkClick}>
            {isBookmarked.some((item) => item.id === id) ? (
              <AiFillStar
                color={BookmarkStar.color.on}
                size='24
      '
              />
            ) : (
              <AiFillStar
                color={BookmarkStar.color.off}
                size='24
      '
              />
            )}
          </button>
        </div>
        {productInfo}
        {modal && (
          <Modal
            setModal={setModal}
            modalData={modalData}
          />
        )}
      </li>
    </>
  );
}
