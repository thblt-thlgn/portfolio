import React, { FunctionComponent } from 'react';
import Sidebar from 'components/sidebar';
import styles from './home-page.module.scss';

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.page}></div>
    </div>
  );
};

export default HomePage;
