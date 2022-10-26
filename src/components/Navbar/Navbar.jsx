import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
import utilities from '../../assets/utilities.module.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { isDarkMode, handleDarkModeToggle } = useDarkMode();

  const handleNavToggle = () => {
    setIsNavVisible(prevIsNavVisible => !prevIsNavVisible);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.navbar} ${utilities.container}`}
        data-visible={isNavVisible}>
        <Link className={styles.logo} to="/">
          <BiCodeAlt className={styles.icon} />
          <h1 className={styles.name}>CodeSage</h1>
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/f&q">F&Q</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>

        <div className={styles.btnGroup}>
          <button
            className={`${styles.navBtn} ${utilities.btn}`}
            onClick={handleDarkModeToggle}>
            {!isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
          <Link className={`${styles.navBtn} ${utilities.btn}`} tp="/user">
            <MdPersonOutline />
          </Link>
          <button
            className={`${styles.navBtn} ${utilities.btn}`}
            onClick={handleNavToggle}>
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
