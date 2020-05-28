import React, { FunctionComponent } from 'react';
import styles from './project-card.module.scss';

interface Props {
  name: string;
  description: string;
  uri: string;
  date: Date;
}

const ProjectCard: FunctionComponent<Props> = (props) => (
  <div className={styles.root}>
    <div className={styles.header}>
      <a href={props.uri} target='_blank' rel='noopener noreferrer'>
        {props.name}
      </a>
    </div>
    <div>{props.description}</div>
  </div>
);

export default ProjectCard;
