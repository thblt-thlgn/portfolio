import React, { FunctionComponent, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './cyclic-messages.module.scss';

interface Props {
  className?: string;
  messages: string[];
  interval?: number; // in ms
}

const CyclicMessages: FunctionComponent<Props> = (props) => {
  const { className, messages, interval = 2000 } = props;
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex((prev) => {
        const newIndex = prev + 1;
        return newIndex < messages.length ? newIndex : 0;
      });
    }, interval);
    return (): void => clearInterval(timeout);
  }, [messages.length, interval]);

  return <div className={clsx(styles.root, className)}>{messages[index]}</div>;
};

export default CyclicMessages;
