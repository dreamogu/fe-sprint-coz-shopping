import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <Footer />
    </>
  );
}
