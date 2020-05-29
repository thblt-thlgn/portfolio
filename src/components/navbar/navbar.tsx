import React, { FunctionComponent } from 'react';
import styles from './navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar: FunctionComponent = () => {
  const { pathname } = useLocation();

  const links = [
    { path: '/about-me', label: 'À propos de moi' },
    { path: '/projects', label: 'Mes projets' },
  ];

  const generatedLinks = links.map((link) => {
    const isActive = pathname.startsWith(link.path);

    return (
      <li key={link.path} className={clsx(isActive && styles.active)}>
        <Link to={link.path}>{link.label}</Link>
      </li>
    );
  });

  return (
    <nav className={styles.root}>
      <ul>{generatedLinks}</ul>
    </nav>
  );
};

export default Navbar;
