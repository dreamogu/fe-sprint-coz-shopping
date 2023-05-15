import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link to='/privacy'>개인정보 처리방침</Link> |{' '}
        <Link to='term-of-service'>이용 약관</Link>
      </nav>
      <div className={styles.copyright}>
        All rights reserved @ Codestates & Eunbi
      </div>
    </footer>
  );
}
