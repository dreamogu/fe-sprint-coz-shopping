import React, { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
import styles from './BookMark.module.css';
import Product from '../../components/Product/Product';

export default function BookMark() {
  const bookmarks = useSelector((state) => state.bookmark.isBookmarked);
  const [filter, setFilter] = useState('total');

  const filteredbookmarks = bookmarks.filter((bookmark) => {
    if (filter === 'total') return true;
    if (filter === 'product') return bookmark.type === 'Product';
    if (filter === 'category') return bookmark.type === 'Category';
    if (filter === 'exhibition') return bookmark.type === 'Exhibition';
    if (filter === 'brand') return bookmark.type === 'Brand';
    return false;
  });

  return (
    <section className={styles.container}>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      {bookmarks ? (
        <ul className={styles.ul}>
          {filteredbookmarks.reverse().map((bookmark) => (
            <Product
              key={bookmark.id}
              {...bookmark}
            />
          ))}
        </ul>
      ) : (
        <div>북마크가 없습니다.</div>
      )}
    </section>
  );
}
