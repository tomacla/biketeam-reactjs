import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, {FC, memo, useCallback, useMemo} from 'react';
import {BikeTeamStateAuth, NavItem} from '../redux/interfaces';
import { selectTeamDetails, selectUiNavItems, selectAuth} from '../redux/selectors';
import { useMemoizedSelector } from '../redux/useMemoizedSelector';
import { useTeamId } from './common/hooks';
import Header from './Header';
import {useSelector} from 'react-redux';
import {actions, useActionsDispatch} from '../redux/store';

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
  handleGoLogin: LinkProps;
  logout: Function;
  auth: BikeTeamStateAuth;
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
  const handleGoLogin = useSref('login');
  const auth = useSelector(selectAuth);
  const dispatch = useActionsDispatch();
  const logout = useCallback(() => dispatch(actions.logout()), [dispatch]);
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
    handleGoLogin,
    logout,
    auth,
  }),
  [
    details?.name,
    handleGoFeed,
    handleGoHome,
    handleGoMainHome,
    handleGoMaps,
    handleGoRides,
    handleGoTrips,
    handleGoLogin,
    navItems,
    teamId,
    logout,
    auth,
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
    handleGoMainHome,
    handleGoLogin,
    logout,
    auth,
  } = useHeaderContainerProps();
  return (
    <Header
      title={title}
      navItems={navItems}
      onGoMainHome={handleGoMainHome}
      onGoHome={handleGoHome}
      onGoLogin={handleGoLogin}
      selectedTeamId={teamId}
      onGoFeed={handleGoFeed}
      onGoMaps={handleGoMaps}
      onGoTrips={handleGoTrips}
      onGoRides={handleGoRides}
      auth={auth}
      logout={logout}
    />
  )
}

export default memo(HeaderContainer);

