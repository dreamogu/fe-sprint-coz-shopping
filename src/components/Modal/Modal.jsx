import React from 'react';
import styles from './Modal.module.css';
import { AiFillStar, AiOutlineClose } from 'react-icons/ai';

export default function Modal(props) {
  const { imgUrl, title, setModal } = props;
  const handleClose = () => {
    setModal(false);
  };
  return (
    <section className={styles.modal_wrap}>
      <div className={styles.modal}>
        <img
          src={imgUrl}
          alt={title}
        />
        <div className={styles.bookmark}>
          <button className={styles.bookmark_btn}>
            <AiFillStar
              color='rgba(223, 223, 223, 0.81)'
              size='24
              '
            />
          </button>
          <span className={styles.name}>{title}</span>
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
