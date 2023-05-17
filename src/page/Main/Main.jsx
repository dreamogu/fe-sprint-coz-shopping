import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import Product from '../../components/Product/Product';
import styles from './Main.module.css';
import Alert from '../../components/Alert/Alert';

function Main() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const bookmarks = useSelector((state) => state.bookmark.isBookmarked);

  useEffect(() => {
    dispatch(fetchProducts(4));
  }, [dispatch]);

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>상품 리스트</h2>
        {loading ? (
          <Alert type='data' />
        ) : (
          <ul className={styles.ul}>
            {products.map((product) => (
              <Product
                key={product.id}
                {...product}
              />
            ))}
          </ul>
        )}
      </section>
      <section className={styles.container}>
        <h2 className={styles.title}>북마크 리스트</h2>
        {bookmarks.length > 0 ? (
          <ul className={styles.ul}>
            {bookmarks
              .slice(-4)
              .reverse()
              .map((bookmark) => (
                <Product
                  key={bookmark.id}
                  {...bookmark}
                />
              ))}
          </ul>
        ) : (
          <Alert type='bookmark' />
        )}
      </section>
    </>
  );
}

export default Main;
