import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import CyclicMessages from 'components/cyclic-messages';
import Image from 'components/image';
import styles from './sidebar.module.scss';
import SidebarFooter from 'components/sidebar-footer';
import SocialButton from 'components/social-button';

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
          className={styles.cyclicMessage}
          prefix="Vous êtes à la recherche d'un"
          messages={[
            'dévelopeur web',
            'guitariste',
            'ingénieur',
            'barroudeur',
            'dévelopeur TypeScript',
            'dévelopeur NodeJS',
            'dévelopeur ReactJS',
            'dévelopeur Angular',
            'expert JavaScript',
            'voyageur',
          ]}
          interval={4000}
          suffix='?'
        />
      </div>

      <div className={styles.socialContainer}>
        <SocialButton type='github' uri='https://github.com/thblt-thlgn' />
        <SocialButton
          type='linkedIn'
          uri='https://www.linkedin.com/in/thibault-theologien'
        />
      </div>

      <SidebarFooter />
    </section>
  );
};

export default Sidebar;
