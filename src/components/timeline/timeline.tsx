import React, { FunctionComponent } from 'react';
import styles from './timeline.module.scss';

interface TimeEvent {
  title: string;
  description: string;
  date: Date | null;
}

interface Props {
  events: TimeEvent[];
}

const TimeLine: FunctionComponent<Props> = (props) => {
  const events = props.events.map((event) => (
    <div key={event.title} className={styles.timeEvent}>
      <div className={styles.title}>{event.title}</div>
      <div className={styles.description}>{event.description}</div>
      <div className={styles.date}>
        <span>{event.date}</span>
        <hr />
      </div>
    </div>
  ));
  return <section className={styles.root}>{events}</section>;
};

export default TimeLine;
