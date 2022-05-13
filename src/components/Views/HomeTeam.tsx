import { useCurrentStateAndParams } from '@uirouter/react';
import { FC, memo, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Team, TeamMember } from '../../redux/interfaces';
import { selectTeamDetails, selectTeamMembers } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import Details from '../Team/Details';
import Members from '../Team/Members';
import { ViewContainer } from './common';

const Layout = styled(Row)`
width: 100%;
`;

const LeftCol = styled(Col).attrs({
  xs: '12',
  md: '4'
})`
`

const RightCol = styled(Col).attrs({
  xs: '12',
  md: '8'
})`
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
  return (team ? (
    <ViewContainer>
      <Layout>
        <LeftCol>
          <Details
            team={team}
            onJoinTeam={() => { }}
          />
          <Members members={members} />
        </LeftCol>
        <RightCol>
          <div>Feed</div>
        </RightCol>
      </Layout>

    </ViewContainer>) : (<>{'NOP'}</>)
  )
}

export default memo(HomeTeam);
