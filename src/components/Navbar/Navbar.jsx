import React from 'react';
import styles from './Navbar.module.css';
import utilities from '../../assets/utilities.module.css';

const Navbar = () => {
  return (
    <header className={utilities.container}>
      <nav className={styles.navbar}></nav>
    </header>
  );
};

export default Navbar;
