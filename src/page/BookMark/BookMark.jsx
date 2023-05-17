import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
import styles from './BookMark.module.css';
import Product from '../../components/Product/Product';
import { useInView } from 'react-intersection-observer';

export default function BookMark() {
  const bookmarks = useSelector((state) => state.bookmark.isBookmarked);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: false });
  const [filter, setFilter] = useState('Total');

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    if (filter === 'Total') return true;
    return bookmark.type === filter;
  });

  const reverseFilteredBookmarks = filteredBookmarks.reverse();
  const bookmarkToShow = reverseFilteredBookmarks.slice(0, page * 12);
  useEffect(() => {
    if (inView) setPage((prevPage) => prevPage + 1);
  }, [inView]);
  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <section className={styles.container}>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />
      {bookmarks ? (
        <>
          <ul className={styles.ul}>
            {bookmarkToShow.map((bookmark) => (
              <Product
                key={bookmark.id}
                {...bookmark}
              />
            ))}
          </ul>
          <div ref={ref} />
        </>
      ) : (
        <div>북마크가 없습니다.</div>
      )}
    </section>
  );
}
