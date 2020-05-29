import React, { FunctionComponent } from 'react';
import { Router } from 'react-router-dom';
import Sidebar from 'components/sidebar';
import Navbar from 'components/navbar';
import Routes from 'routes';
import styles from './app.module.scss';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const HomePage: FunctionComponent = () => {
  return (
    <Router history={history}>
      <div className={styles.root}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.page}>
          <Navbar />
          <div className={styles.pageContent}>
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
