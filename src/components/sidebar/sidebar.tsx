import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import CyclicMessages from 'components/cyclic-messages';
import Image from 'components/image';
import styles from './sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <section className={clsx(styles.root, props.className)}>
      <Image
        className={styles.profilePicture}
        uri='https://pngimage.net/wp-content/uploads/2018/06/photo-profil-png-1.png'
      />
      <CyclicMessages messages={['premier message', 'second message']}></CyclicMessages>
    </section>
  );
};

export default Sidebar;
