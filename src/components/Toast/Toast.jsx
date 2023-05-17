import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styles from './Toast.module.css';

export default function Toast(props) {
  const { message, color } = props;
  return (
    <section className={styles.toast_container}>
      <AiFillStar
        color={color}
        size='24
'
      />
      <span className={styles.message}>{message}</span>
    </section>
  );
}
