import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>오은비님, 안녕하세요!</div>
      <Link to='/products/list'>
        <img
          src='/icons/products.svg'
          alt=''
        />
        상품 페이지 리스트
      </Link>
      <Link to='/bookmark'>
        <img
          src='/icons/bookmark.svg'
          alt=''
        />
        북마크 리스트
      </Link>
    </nav>
  );
}
