import React, { FunctionComponent } from 'react';
import TimeLine from 'components/timeline';

const AboutMePage: FunctionComponent = () => (
  <div>
    <TimeLine
      events={[
        {
          title: 'Jogogo',
          date: null,
          description: 'Current job',
        },
        {
          title: 'Nobbas',
          date: null,
          description: 'Previous job',
        },
        {
          title: 'Rentoo',
          date: null,
          description: 'Old job',
        },
        {
          title: 'Signeer',
          date: null,
          description: 'Old job',
        },
        {
          title: 'Saagie',
          date: null,
          description: 'Old job',
        },
        {
          title: 'Espace courbe',
          date: null,
          description: 'Old job',
        },
      ]}
    />
  </div>
);

export default AboutMePage;
