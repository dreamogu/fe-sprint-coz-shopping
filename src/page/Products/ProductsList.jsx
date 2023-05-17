import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import Product from '../../components/Product/Product';
import styles from './ProductsList.module.css';
import Filter from '../../components/Filter/Filter';
import { useInView } from 'react-intersection-observer';
import Alert from '../../components/Alert/Alert';

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: false });
  const [filter, setFilter] = useState('Total');

  const filteredProducts = products.filter((bookmark) => {
    if (filter === 'Total') return true;
    return bookmark.type === filter;
  });

  const productsToShow = filteredProducts.slice(0, page * 12);

  useEffect(() => {
    dispatch(fetchProducts(null));
  }, [dispatch]);

  useEffect(() => {
    if (inView) setPage((prevPage) => prevPage + 1);
  }, [inView]);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <>
      <section className={styles.container}>
        <Filter
          filter={filter}
          setFilter={setFilter}
        />
        {loading ? (
          <Alert type='data' />
        ) : (
          <>
            <ul className={styles.ul}>
              {productsToShow.map((product) => (
                <Product
                  key={product.id}
                  {...product}
                />
              ))}
            </ul>
            <div ref={ref} />
          </>
        )}
      </section>
    </>
  );
}

export default ProductsList;
