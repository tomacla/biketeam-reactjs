
import { useCurrentStateAndParams, useSref } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { selecteCurrentTeamId } from '../redux/selectors';
import { actions, useActionsDispatch } from '../redux/store';
import { useMemoizedSelector } from '../redux/useMemoizedSelector';
import Header from './Header';


function useTeamId(): string{
  const dispatch = useActionsDispatch()
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  const teamIdFromState = useMemoizedSelector(selecteCurrentTeamId);
  useEffect(()=> {
    if (!teamIdFromState && teamId) {
      dispatch(actions.getTeamDetailsAsync({ teamId }));
    }
  }, [dispatch, teamId, teamIdFromState])
  return teamId || teamIdFromState;
}

const HeaderContainer: FC = () => {
  const teamId = useTeamId();
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
