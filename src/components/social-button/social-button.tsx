import React, { FunctionComponent } from 'react';
import styles from './social-button.module.scss';
import SVGIcon, { Props as SVGIconProps } from 'components/svg-icon';

interface Props {
  type: 'linkedIn' | 'github';
  uri: string;
}

const getIcon = (type: Props['type']): JSX.Element => {
  const props: Partial<SVGIconProps> = {
    size: 'very-large',
    color: 'secondary',
  };

  switch (type) {
    case 'linkedIn':
      return <SVGIcon name='linkedin-logo' {...props} />;
    case 'github':
      return <SVGIcon name='github-logo' {...props} />;
    default:
      throw new Error('Invalid type');
  }
};

const SocialButton: FunctionComponent<Props> = (props) => {
  const icon = getIcon(props.type);
  const onClick = (): void => {
    window.open(props.uri, '_blank');
  };
  return (
    <button className={styles.root} onClick={onClick}>
      {icon}
    </button>
  );
};

export default SocialButton;
