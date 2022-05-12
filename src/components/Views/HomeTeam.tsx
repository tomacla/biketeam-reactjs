import { useCurrentStateAndParams } from '@uirouter/react';
import { FC, memo, useEffect } from 'react';
import { Team, TeamMember } from '../../redux/interfaces';
import { selectTeamDetails, selectTeamMembers } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import Details from '../Team/Details';
import Members from '../Team/Members';
import { ViewContainer } from './common';
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
  return (team ? (
    <ViewContainer>
      <Details name={team.name} description={team.description} teamId={team.id} onJoinTeam={() => { }} />
      <Members members={members} />
    </ViewContainer>) : (<>{'NOP'}</>)
  )
}

export default memo(HomeTeam);
