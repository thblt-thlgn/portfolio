import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './sidebar.module.scss';
import CyclicMessages from 'components/cyclic-messages';

interface Props {
  className?: string;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <section className={clsx(styles.root, props.className)}>
      <CyclicMessages messages={['premier message', 'second message']}></CyclicMessages>
    </section>
  );
};

export default Sidebar;
