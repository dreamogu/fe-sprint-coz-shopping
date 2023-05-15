import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import Product from '../../components/Product/Product';
import styles from './ProductsList.module.css';
import Filter from '../../components/Filter/Filter';

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const [filter, setFilter] = useState('total');
  const filteredProducts = products.filter((product) => {
    if (filter === 'total') return true;
    if (filter === 'product') return product.type === 'Product';
    if (filter === 'category') return product.type === 'Category';
    if (filter === 'exhibition') return product.type === 'Exhibition';
    if (filter === 'brand') return product.type === 'Brand';
    return false;
  });

  useEffect(() => {
    dispatch(fetchProducts(null));
  }, [dispatch]);

  return (
    <>
      <section className={styles.container}>
        <Filter
          filter={filter}
          setFilter={setFilter}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className={styles.ul}>
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                {...product}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default ProductsList;
