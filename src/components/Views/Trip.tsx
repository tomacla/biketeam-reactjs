import React, { FC, memo } from 'react';
import { useLoadTeams } from '../common/hooks';
import { ViewContainer } from './common';

const Trip: FC = () => {
  useLoadTeams();
  return (
    <ViewContainer>
      TODO: Trip
    </ViewContainer>)
}

export default memo(Trip);
