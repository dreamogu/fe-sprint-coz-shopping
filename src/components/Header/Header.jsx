import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <Link
          to='/'
          className={styles.logo}
        >
          <img
            src='/icons/logo.svg'
            alt='coz shopping 로고'
          />
          <h1>COZ Shopping</h1>
        </Link>
        <div className={styles.nav_container}>
          <button
            className={styles.button}
            onClick={handleNavClick}
          >
            <GiHamburgerMenu />
          </button>
          {isNavOpen && <Nav />}
        </div>
      </div>
    </header>
  );
}
