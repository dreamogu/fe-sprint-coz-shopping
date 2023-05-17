import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ filter, setFilter }) {
  const filterHandler = (type) => {
    setFilter(type);
  };

  return (
    <section className={styles.filter_item}>
      <button
        onClick={() => filterHandler('total')}
        className={filter === 'total' ? styles.selected : ''}
      >
        <img
          src='/img/total.png'
          alt=''
        />
        <span className={styles.type}>전체</span>
      </button>
      <button
        onClick={() => filterHandler('product')}
        className={filter === 'product' ? styles.selected : ''}
      >
        <img
          src='/img/product.png'
          alt=''
        />
        <span className={styles.type}>상품</span>
      </button>
      <button
        onClick={() => filterHandler('category')}
        className={filter === 'category' ? styles.selected : ''}
      >
        <img
          src='/img/category.png'
          alt=''
        />
        <span className={styles.type}>카테고리</span>
      </button>
      <button
        onClick={() => filterHandler('exhibition')}
        className={filter === 'exhibition' ? styles.selected : ''}
      >
        <img
          src='/img/exhibition.png'
          alt=''
        />
        <span className={styles.type}>기획전</span>
      </button>
      <button
        onClick={() => filterHandler('brand')}
        className={filter === 'brand' ? styles.selected : ''}
      >
        <img
          src='/img/brand.png'
          alt=''
        />
        <span className={styles.type}>브랜드</span>
      </button>
    </section>
  );
}
