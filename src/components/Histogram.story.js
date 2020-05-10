import React from 'react';
import { storiesOf } from '@storybook/react';

import Histogram from './Histogram';

export default {
  component: Histogram,
  title: Histogram.displayName,
};

export const Loading = () => <Histogram loading />;
export const FullData = () => (
  <Histogram
    series={[
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]}
  />
);