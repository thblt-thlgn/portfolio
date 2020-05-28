import React, { FunctionComponent } from 'react';
import Sidebar from 'components/sidebar';
import styles from './home-page.module.scss';
import ProjectSection from 'components/projects-section';

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.page}>
        <ProjectSection />
      </div>
    </div>
  );
};

export default HomePage;
