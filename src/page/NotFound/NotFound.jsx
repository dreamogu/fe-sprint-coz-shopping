import React from 'react';
import Alert from '../../components/Alert/Alert';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <Alert type='error' />
      <Footer />
    </>
  );
}
