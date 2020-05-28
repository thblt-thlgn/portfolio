import React, { FunctionComponent } from 'react';
import { LinkedInIcon, GitHubIcon, Props as IconProps } from 'components/icons';
import styles from './social-button.module.scss';

interface Props {
  type: 'linkedIn' | 'github';
  uri: string;
}

const getIcon = (type: Props['type']): JSX.Element => {
  const props: IconProps = {
    size: 'large',
    primaryColor: 'secondary',
  };

  switch (type) {
    case 'linkedIn':
      return <LinkedInIcon {...props} />;
    case 'github':
      return <GitHubIcon {...props} />;
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
