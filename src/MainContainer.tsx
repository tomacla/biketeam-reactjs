import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';
import { selectTeams } from './components/redux/selectors';
import { actions, useActionsDispatch } from './components/redux/store';

const useLoadTeams = (): void => {
  const dispatch = useActionsDispatch()
  useEffect(() => {
    dispatch(actions.getTeamsAsync())
  }, [dispatch])
}

const MainContainer: FC = () => {
  useLoadTeams();
  const teams = useSelector(selectTeams);
  return (
    <>
      <Home teams={teams} />
    </>
  )
}

export default MainContainer;
