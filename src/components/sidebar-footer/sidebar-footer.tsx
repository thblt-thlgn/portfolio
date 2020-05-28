import React, { FunctionComponent } from 'react';
import styles from './sidebar-footer.module.scss';

const SidebarFooter: FunctionComponent = () => (
  <div className={styles.root}>
    <span>©2020, Thibault Théologien</span>
    <br />
    <a
      href='https://github.com/thblt-thlgn/portfolio'
      target='_blank'
      rel='noopener noreferrer'
    >
      Get source code
    </a>
  </div>
);

export default SidebarFooter;
