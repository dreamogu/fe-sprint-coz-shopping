import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
