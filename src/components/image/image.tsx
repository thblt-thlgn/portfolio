import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './image.module.scss';

interface Props {
  uri: string;
  className?: string;
}

const Image: FunctionComponent<Props> = (props) => (
  <div
    className={clsx(styles.image, props.className)}
    style={{
      backgroundImage: `url(${props.uri})`,
    }}
  >
    {props.children}
  </div>
);

export default Image;
