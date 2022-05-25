import { useCurrentStateAndParams } from '@uirouter/react';
import { FC, memo, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Team, TeamEvent, TeamMember } from '../../redux/interfaces';
import { selectTeamDetails, selectTeamEvents, selectTeamMembers } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { DEFAULT_TITLE } from '../common/constants';
import Details from '../Team/Details';
import Events from '../Team/Event/EventList';
import HeatMap from '../Team/HeatMap';
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
  events: TeamEvent[];
  team?: Team;
}

const useHomeTeamProps = (): HomeTeamPropsResults => {
  const dispatch = useActionsDispatch()
  const {
    params: { teamId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId) {
      // dispatch(actions.getTeamDetailsAsync({ teamId }));
      dispatch(actions.getTeamMembersAsync({ teamId }));
      dispatch(actions.getTeamEventsAsync({ teamId }));
    }
  }, [dispatch, teamId])
  const team = useMemoizedSelector(selectTeamDetails);
  const members = useMemoizedSelector(selectTeamMembers);
  const events = useMemoizedSelector(selectTeamEvents);
  useEffect(() => {
    document.title = team ? team.name : DEFAULT_TITLE;
  })
  return {
    team,
    members,
    events
  };
}

const HomeTeam: FC = () => {
  const { team, members, events } = useHomeTeamProps();
  return (team ? (
    <ViewContainer>
      <Layout>
        <LeftCol>
          <Details
            team={team}
            onJoinTeam={() => { }}
          />
          <Members members={members} />
          {team.heatmap ?<HeatMap teamId={team.id}/> : null}

        </LeftCol>
        <RightCol>
          <Events events={events} />
        </RightCol>
      </Layout>
    </ViewContainer>) : (<>{'NOP'}</>)
  )
}

export default memo(HomeTeam);
