import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ filter, setFilter }) {
  const buttons = [
    { type: 'total', img: '/img/total.png', text: '전체' },
    { type: 'product', img: '/img/product.png', text: '상품' },
    { type: 'category', img: '/img/category.png', text: '카테고리' },
    { type: 'exhibition', img: '/img/exhibition.png', text: '기획전' },
    { type: 'brand', img: '/img/brand.png', text: '브랜드' },
  ];

  return (
    <section className={styles.filter_item}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => setFilter(button.type)}
          className={filter === button.type ? styles.selected : ''}
        >
          <img
            src={button.img}
            alt=''
          />
          <span className={styles.type}>{button.text}</span>
        </button>
      ))}
    </section>
  );
}
