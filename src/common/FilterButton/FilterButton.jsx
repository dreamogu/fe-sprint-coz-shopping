import React from 'react';
import styles from './FilterButton.module.css';

export default function FilterButton({ type, img, text, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        isSelected ? `${styles.selected} ${styles.btn}` : `${styles.btn}`
      }
    >
      <img
        src={img}
        alt=''
      />
      <span className={styles.type}>{text}</span>
    </button>
  );
}
