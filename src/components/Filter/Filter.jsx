import React from 'react';
import styles from './Filter.module.css';
import totalIcon from '../../asset/img/total.png';
import productIcon from '../../asset/img/product.png';
import categoryIcon from '../../asset/img/category.png';
import exhibitionIcon from '../../asset/img/exhibition.png';
import brandIcon from '../../asset/img/brand.png';
import FilterButton from '../../common/FilterButton/FilterButton';

export const buttons = [
  { type: 'Total', img: totalIcon, text: '전체' },
  { type: 'Product', img: productIcon, text: '상품' },
  { type: 'Category', img: categoryIcon, text: '카테고리' },
  { type: 'Exhibition', img: exhibitionIcon, text: '기획전' },
  { type: 'Brand', img: brandIcon, text: '브랜드' },
];
export default function Filter({ filter, setFilter }) {
  return (
    <section className={styles.filter_item}>
      {buttons.map((button, index) => (
        <FilterButton
          key={index}
          img={button.img}
          text={button.text}
          onClick={() => setFilter(button.type)}
          isSelected={filter === button.type}
        />
      ))}
    </section>
  );
}
