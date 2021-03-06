import React, { FunctionComponent } from 'react';
import ProjectCard from 'components/project-card';
import styles from './project-section.module.scss';

const ProjectSection: FunctionComponent = () => (
  <div className={styles.root}>
    <ProjectCard
      name='call-me-thread'
      uri='https://github.com/thblt-thlgn/call-me-thread'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      date={new Date()}
    />
    <ProjectCard
      name='omdb'
      uri='https://github.com/thblt-thlgn/omdb'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
      date={new Date()}
    />
  </div>
);

export default ProjectSection;
