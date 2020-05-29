import React, { FunctionComponent } from 'react';
import styles from './social-button.module.scss';
import SVGIcon, { Props as SVGIconProps } from 'components/svg-icon';

interface Props {
  icon: IconName;
  uri: string;
}

const SocialButton: FunctionComponent<Props> = (props) => {
  const iconProps: SVGIconProps = {
    name: props.icon,
    size: 'large',
    color: 'secondary',
  };
  const onClick = (): void => {
    window.open(props.uri, '_blank');
  };
  return (
    <button className={styles.root} onClick={onClick}>
      <SVGIcon {...iconProps} />
    </button>
  );
};

export default SocialButton;
