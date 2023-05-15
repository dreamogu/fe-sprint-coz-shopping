import React, { useState } from 'react';
import styles from './Product.module.css';
import { AiFillStar } from 'react-icons/ai';
import Modal from '../Modal/Modal';
export default function Product(props) {
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

  const [modal, setModal] = useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };

  let productDisplay;
  switch (type) {
    case 'Product':
      productDisplay = (
        <>
          <li
            key={id}
            className={styles.product_item}
            onClick={handleModalOpen}
          >
            <div className={styles.product_img}>
              <img
                src={image_url}
                alt={title}
              />
              <button>
                <AiFillStar
                  color='rgba(223, 223, 223, 0.81)'
                  size='24
              '
                />
              </button>
            </div>
            <div className={styles.product_detail}>
              <div className={styles.product_title}>
                <h3>{title}</h3>
              </div>
              <div className={styles.product_info}>
                <div className={styles.discount}>{discountPercentage}%</div>
                <div>{formattedPrice}원</div>
              </div>
            </div>
          </li>
          {modal && (
            <Modal
              title={title}
              imgUrl={image_url}
              setModal={setModal}
            />
          )}
        </>
      );
      break;
    case 'Category':
      productDisplay = (
        <>
          <li
            key={id}
            className={styles.product_item}
            onClick={handleModalOpen}
          >
            <div className={styles.product_img}>
              <img
                src={image_url}
                alt={title}
              />
              <button>
                <AiFillStar
                  color='rgba(223, 223, 223, 0.81)'
                  size='24
              '
                />
              </button>
            </div>
            <div className={styles.product_detail}>
              <div className={styles.product_title}>
                <h3># {title}</h3>
              </div>
            </div>
          </li>
          {modal && (
            <Modal
              title={title}
              imgUrl={image_url}
              setModal={setModal}
            />
          )}
        </>
      );
      break;
    case 'Exhibition':
      productDisplay = (
        <>
          <li
            key={id}
            className={styles.product_item}
            onClick={handleModalOpen}
          >
            <div className={styles.product_wrap}>
              <div className={styles.product_img}>
                <img
                  src={image_url}
                  alt={title}
                />
                <button>
                  <AiFillStar
                    color='rgba(223, 223, 223, 0.81)'
                    size='24
            '
                  />
                </button>
              </div>
              <div className={styles.product_detail}>
                <div className={styles.product_title}>
                  <h3>{title}</h3>
                  <div>{sub_title}</div>
                </div>
              </div>
            </div>
          </li>
          {modal && (
            <Modal
              title={title}
              imgUrl={image_url}
              setModal={setModal}
            />
          )}
        </>
      );
      break;
    case 'Brand':
      productDisplay = (
        <>
          {' '}
          <li
            key={id}
            className={styles.product_item}
            onClick={handleModalOpen}
          >
            <div className={styles.product_img}>
              <img
                src={brand_image_url}
                alt={brand_name}
              />
              <button>
                <AiFillStar
                  color='rgba(223, 223, 223, 0.81)'
                  size='24
            '
                />
              </button>
            </div>
            <div className={styles.product_detail}>
              <div className={styles.product_title}>
                <h3>{brand_name}</h3>
              </div>
              <div className={styles.product_info}>
                <div className={styles.follwer}>관심고객수</div>
                <div>{formattedFollower}명</div>
              </div>
            </div>
          </li>
          {modal && (
            <Modal
              title={brand_name}
              imgUrl={brand_image_url}
              setModal={setModal}
            />
          )}
        </>
      );
      break;
    default:
      return null;
  }
  return productDisplay;
}
