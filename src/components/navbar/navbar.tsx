import React, { FunctionComponent } from 'react';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar: FunctionComponent = () => (
  <nav className={styles.root}>
    <ul>
      <li>
        <Link to='/about-me'>À propos de moi</Link>
      </li>
      <li>
        <Link to='/projects'>Mes projets</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
