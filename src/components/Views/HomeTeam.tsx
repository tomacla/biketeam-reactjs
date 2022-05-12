import { useCurrentStateAndParams } from '@uirouter/react';
import { FC, memo, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Team } from '../../redux/interfaces';
import { selectTeamDetails } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';

const HomeTeamContainer = styled(Container)`
 min-height: calc(100vh - 104px);
display: flex;
align-items: center;
flex-direction: column;
`

const useTeamDetails = (): Team | undefined => {
  const dispatch = useActionsDispatch()
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId) {
      dispatch(actions.getTeamDetailsAsync({ teamId }))
    }
  }, [dispatch, teamId])
  return useMemoizedSelector(selectTeamDetails);
}

const HomeTeam: FC = () => {
  const team = useTeamDetails();
  return (
    <HomeTeamContainer>HomeTeam - {team ? team.name : 'NOP'}</HomeTeamContainer>
  )
}

export default memo(HomeTeam);
