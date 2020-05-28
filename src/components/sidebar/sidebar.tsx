import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import CyclicMessages from 'components/cyclic-messages';
import Image from 'components/image';
import styles from './sidebar.module.scss';
import RedirectionButton from 'components/redirection-button';
import SidebarFooter from 'components/sidebar-footer';

interface Props {
  className?: string;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <section className={clsx(styles.root, props.className)}>
      <div className={clsx(styles.profile)}>
        <Image
          className={styles.profilePicture}
          uri='https://pngimage.net/wp-content/uploads/2018/06/photo-profil-png-1.png'
        />
        <div>
          <span>Thibault</span>
          <span>Théologien</span>
        </div>
      </div>

      <div>
        <CyclicMessages
          prefix="Vous êtes à la recherche d'un"
          messages={['dévelopeur web', 'guitariste', 'ingénieur', 'barroudeur']}
          suffix='?'
        />
      </div>

      <div>
        <RedirectionButton name='github' uri='https://github.com/thblt-thlgn' />
        <RedirectionButton name='linkedin' uri='https://www.linkedin.com/in/thibault-theologien' />
      </div>

      <SidebarFooter />
    </section>
  );
};

export default Sidebar;
