
import { useCurrentStateAndParams, useSref } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { selectUiNavItems } from '../redux/selectors';
import { actions, useActionsDispatch } from '../redux/store';
import { useMemoizedSelector } from '../redux/useMemoizedSelector';
import Header from './Header';


function useTeamId(): string | undefined{
  const dispatch = useActionsDispatch();
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(()=> {
    if (teamId) {
      dispatch(actions.getTeamDetailsAsync({ teamId }));
    }
  }, [dispatch, teamId])
  return teamId;
}

const HeaderContainer: FC = () => {
  const teamId = useTeamId();
  const navItems = useMemoizedSelector(selectUiNavItems);
  const handleGoHome = useSref('home');
  const handleGoFeed = useSref('homeTeam', { teamId: teamId });
  const handleGoTrips = useSref('trips', { teamId: teamId });
  const handleGoRides = useSref('rides', { teamId: teamId });
  const handleGoMaps = useSref('maps', { teamId: teamId });
  return (
    <Header
      navItems={navItems}
      onGoHome={handleGoHome}
      selectedTeamId={teamId}
      onGoFeed={handleGoFeed}
      onGoMaps={handleGoMaps}
      onGoTrips={handleGoTrips}
      onGoRides={handleGoRides} />
  )
}

export default memo(HeaderContainer);

