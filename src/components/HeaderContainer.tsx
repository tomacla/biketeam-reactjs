
import { useSref } from '@uirouter/react';
import React, { FC, memo } from 'react';
import { useSelectedTeamId } from '../redux/selectors';
import { useMemoizedSelector } from '../redux/useMemoizedSelector';

import Header from './Header';


const HeaderContainer: FC = () => {
  const teamId = useMemoizedSelector(useSelectedTeamId);
  const handleGoHome = useSref('home');
  const handleGoFeed = useSref('homeTeam', { teamId: teamId });
  const handleGoTrips = useSref('trips', { teamId: teamId });
  const handleGoRides = useSref('rides', { teamId: teamId });
  const handleGoMaps = useSref('maps', { teamId: teamId });
  return (
    <Header
      onGoHome={handleGoHome}
      selectedTeamId={teamId}
      onGoFeed={handleGoFeed}
      onGoMaps={handleGoMaps}
      onGoTrips={handleGoTrips}
      onGoRides={handleGoRides} />
  )
}

export default memo(HeaderContainer);
