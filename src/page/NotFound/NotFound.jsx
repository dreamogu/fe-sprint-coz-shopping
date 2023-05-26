import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Alert from '../../common/Alert/Alert';

export default function NotFound() {
  return (
    <>
      <Header />
      <Alert type='error' />
      <Footer />
    </>
  );
}
