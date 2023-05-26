import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import productsIcon from '../../asset/icons/products.svg';
import bookmarkIcon from '../../asset/icons/bookmark.svg';

export default function Nav({ closeNav }) {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={closeNav}
      />
      <nav
        className={styles.nav}
        onClick={closeNav}
      >
        {' '}
        <div>오은비님, 안녕하세요!</div>
        <Link to='/products/list'>
          <img
            src={productsIcon}
            alt=''
          />
          상품 페이지 리스트
        </Link>
        <Link to='/bookmark'>
          <img
            src={bookmarkIcon}
            alt=''
          />
          북마크 리스트
        </Link>
      </nav>
    </>
  );
}
