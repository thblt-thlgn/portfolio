import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import CyclicMessages from 'components/cyclic-messages';
import Image from 'components/image';
import styles from './sidebar.module.scss';
import RedirectionButton from 'components/redirection-button';

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

      <div>
        <RedirectionButton name='github' uri='https://github.com/thblt-thlgn' />
        <RedirectionButton name='linkedin' uri='https://www.linkedin.com/in/thibault-theologien' />
      </div>

      <div className={styles.footer}>
        <span>©2020, Thibault Théologien</span>
        <br />
        <a>Get source code</a>
      </div>
    </section>
  );
};

export default Sidebar;
