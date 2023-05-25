import React from 'react';
import styles from './Filter.module.css';
import totalIcon from '../../asset/img/total.png';
import productIcon from '../../asset/img/product.png';
import categoryIcon from '../../asset/img/category.png';
import exhibitionIcon from '../../asset/img/exhibition.png';
import brandIcon from '../../asset/img/brand.png';

export default function Filter({ filter, setFilter }) {
  const buttons = [
    { type: 'Total', img: totalIcon, text: '전체' },
    { type: 'Product', img: productIcon, text: '상품' },
    { type: 'Category', img: categoryIcon, text: '카테고리' },
    { type: 'Exhibition', img: exhibitionIcon, text: '기획전' },
    { type: 'Brand', img: brandIcon, text: '브랜드' },
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
