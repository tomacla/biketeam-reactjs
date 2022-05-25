import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, { FC, memo, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Team } from '../../redux/interfaces';
import { selectTeams } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { DEFAULT_TITLE } from '../common/constants';
import { useLoadTeams } from '../common/hooks';
import TeamList from '../Teams/TeamList';
import { ViewContainer } from './common';

const List = styled.ul`
list-style-type: none;
display:flex;
flex-direction: column;
align-items: center;
`;

const ElementList = styled.li`
font-size: 20px;
`;

const LineDivider = styled.div`
width: 100%;
height: 1px;
background-color: #dee2e6;
margin: 16px 0px 16px 0px;
`;

const Title = styled.h1`
margin-top: 16px;
`;

const ExploreLink = styled.h6`
margin-bottom: 24px;
`;

interface HomePropsResult {
  teams: Team[],
  goToTeams: LinkProps
}

function useHomeProps() : HomePropsResult {
  const dispatch = useActionsDispatch()
  const teams = useSelector(selectTeams);
  const goToTeams = useSref('teams');
  const PAGE_SIZE = '4';
  useLoadTeams(PAGE_SIZE);
  useEffect(() => {
    dispatch(actions.clearTeamDetails())
    document.title = DEFAULT_TITLE;
  }, [dispatch])
  return {
    teams,
    goToTeams
  }
}

const Home: FC = () => {
  const {teams, goToTeams} = useHomeProps();
  return (
    <ViewContainer>
      <Title>Un site unique pour les groupes de vélo</Title>
      <LineDivider />
      <List>
        <ElementList>Rassemblez votre communauté</ElementList>
        <ElementList>Partagez vos maps</ElementList>
        <ElementList>Gérez vos rides</ElementList>
        <ElementList>Publiez des actualités</ElementList>
      </List>
      <Button variant="secondary">Créer mon groupe !</Button>
      <LineDivider />
      <h5>Déjà sur Biketeam</h5>
      <ExploreLink>
        <a className='link-secondary' {...goToTeams}>
          Explorer les groupes
        </a>
      </ExploreLink>
      <TeamList teams={teams} />
    </ViewContainer>)
}

export default memo(Home);
