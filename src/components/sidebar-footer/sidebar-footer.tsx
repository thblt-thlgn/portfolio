import React, { FunctionComponent } from 'react';
import styles from './sidebar-footer.module.scss';

const SidebarFooter: FunctionComponent = () => (
  <div className={styles.root}>
    <span>©2020, Thibault Théologien</span>
    <br />
    <a>Get source code</a>
  </div>
);

export default SidebarFooter;
