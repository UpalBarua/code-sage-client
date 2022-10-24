import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCodeAlt } from 'react-icons/bi';
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdPersonOutline,
  MdMenu,
  MdClose,
} from 'react-icons/md';
import { useDarkMode } from '../../contexts/DarkModeContext';
import styles from './Navbar.module.css';
import '../../assets/utilities.module.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { handleDarkModeToggle } = useDarkMode();

  const handleNavToggle = () => {
    setIsNavVisible(prevIsNavVisible => !prevIsNavVisible);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`} data-visible={isNavVisible}>
        <Link className={styles.logo} to="/">
          <BiCodeAlt className={styles.icon} />
          <h1 className={styles.name}>Code Lab</h1>
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/f&q">F&Q</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className={styles.btnGroup}>
          <button
            className={`${styles.navBtn} btn`}
            onClick={handleDarkModeToggle}>
            {<MdOutlineDarkMode /> || <MdOutlineLightMode />}
          </button>
          <Link className={`${styles.navBtn} btn`} tp="/user">
            <MdPersonOutline />
          </Link>
          <button className={`${styles.navBtn} btn`} onClick={handleNavToggle}>
            {isNavVisible ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// it will contain a navbar with the options: website logo, website name,
// Courses, FAQ, Blog, toggle theme (dark/ light), and User Profile Picture (or
// login).
