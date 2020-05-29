import React, { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './svg-icon.module.scss';

type Color = 'primary' | 'secondary' | 'transparent' | 'charcoal';
type Size = 'small' | 'medium' | 'large';

export interface Props {
  name: IconName;
  backgroundColor?: Color;
  color?: Color;
  size?: Size;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
}

const SVGIcon: FunctionComponent<Props> = (props) => {
  const {
    name,
    size = 'regular',
    color = 'charcoal',
    backgroundColor = 'transparent',
    strokeWidth = 0,
    stroke,
    fill,
  } = props;
  const [icon, setIcon] = useState<JSX.Element | null>(null);
  useEffect(() => {
    const DesiredIcon = React.lazy(() => import(`./icons/${name}-icon`));
    setIcon(<DesiredIcon />);
  }, [name]);

  return (
    <div
      className={clsx(
        styles.root,
        styles[size],
        styles[`color-${color}`],
        styles[`background-${backgroundColor}`],
      )}
      style={{
        strokeWidth,
        stroke,
        fill,
      }}
    >
      {icon}
    </div>
  );
};

export default SVGIcon;
