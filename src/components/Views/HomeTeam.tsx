import { useCurrentStateAndParams } from '@uirouter/react';
import { FC, memo, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Team, TeamMember } from '../../redux/interfaces';
import { selectTeamDetails, selectTeamMembers } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import Members from '../Team/Members';

const HomeTeamContainer = styled(Container)`
 min-height: calc(100vh - 104px);
display: flex;
align-items: center;
flex-direction: column;
`

interface HomeTeamPropsResults {
  members: TeamMember[];
  team?: Team;
}

const useHomeTeamProps = (): HomeTeamPropsResults => {
  const dispatch = useActionsDispatch()
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId) {
      dispatch(actions.getTeamDetailsAsync({ teamId }))
      dispatch(actions.getTeamMembersAsync({ teamId }))
    }
  }, [dispatch, teamId])
  const team = useMemoizedSelector(selectTeamDetails);
  const members = useMemoizedSelector(selectTeamMembers);
  return {
    team,
    members
  };
}

const HomeTeam: FC = () => {
  const { team, members } = useHomeTeamProps();
  return (
    <HomeTeamContainer>
      <div> HomeTeam - {team ? team.name : 'NOP'}</div>
      <Members members={members} />
    </HomeTeamContainer>
  )
}

export default memo(HomeTeam);
