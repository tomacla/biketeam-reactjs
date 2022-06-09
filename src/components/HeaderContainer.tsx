
import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, { FC, memo, useMemo } from 'react';
import { NavItem } from '../redux/interfaces';
import { selectTeamDetails, selectUiNavItems } from '../redux/selectors';
import { useMemoizedSelector } from '../redux/useMemoizedSelector';
import { useTeamId } from './common/hooks';
import Header from './Header';

interface HeaderContainerPropsResult {
  navItems: NavItem[];
  teamId?: string;
  title?: string;
  handleGoMainHome: LinkProps;
  handleGoHome: LinkProps;
  handleGoFeed: LinkProps;
  handleGoTrips: LinkProps;
  handleGoRides: LinkProps;
  handleGoMaps: LinkProps;
}


function useHeaderContainerProps(): HeaderContainerPropsResult {
  const teamId = useTeamId();
  const details = useMemoizedSelector(selectTeamDetails);
  const navItems = useMemoizedSelector(selectUiNavItems);
  const handleGoMainHome = useSref('home');
  const handleGoHome = useSref(teamId ? 'homeTeam' : 'home', { teamId: teamId });
  const handleGoFeed = useSref('homeTeam', { teamId: teamId });
  const handleGoTrips = useSref('trips', { teamId: teamId });
  const handleGoRides = useSref('rides', { teamId: teamId });
  const handleGoMaps = useSref('maps', { teamId: teamId });
  return useMemo(() => ({
    teamId: teamId,
    title: details?.name,
    navItems,
    handleGoMainHome,
    handleGoHome,
    handleGoFeed,
    handleGoTrips,
    handleGoRides,
    handleGoMaps,
  }),
  [
    details?.name,
    handleGoFeed,
    handleGoHome,
    handleGoMainHome,
    handleGoMaps,
    handleGoRides,
    handleGoTrips,
    navItems,
    teamId
  ]
  )
}

const HeaderContainer: FC = () => {
  const {
    title,
    navItems,
    handleGoHome,
    teamId,
    handleGoFeed,
    handleGoMaps,
    handleGoTrips,
    handleGoRides,
    handleGoMainHome } = useHeaderContainerProps();
  return (
    <Header
      title={title}
      navItems={navItems}
      onGoMainHome={handleGoMainHome}
      onGoHome={handleGoHome}
      selectedTeamId={teamId}
      onGoFeed={handleGoFeed}
      onGoMaps={handleGoMaps}
      onGoTrips={handleGoTrips}
      onGoRides={handleGoRides} />
  )
}

export default memo(HeaderContainer);

