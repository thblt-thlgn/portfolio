import React, { FunctionComponent } from 'react';

interface Props {
  name: string;
  uri: string;
}

const RedirectionButton: FunctionComponent<Props> = (props) => (
  <a href={props.uri}>
    <button>{props.name}</button>
  </a>
);

export default RedirectionButton;
