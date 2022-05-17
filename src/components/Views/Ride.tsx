import React, { FC, memo } from 'react';
import { useLoadTeams } from '../common/hooks';
import { ViewContainer } from './common';

const Ride: FC = () => {
  useLoadTeams();
  return (
    <ViewContainer>
      TODO: Ride
    </ViewContainer>)
}

export default memo(Ride);
