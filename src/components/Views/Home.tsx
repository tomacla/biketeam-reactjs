import { useSref } from '@uirouter/react';
import React, { FC, memo } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectTeams } from '../../redux/selectors';
import { useLoadTeams } from '../common/hooks';
import TeamList from '../Teams/TeamList';
import { ViewContainer } from './common';

const HomeContainer = styled(ViewContainer)`

`

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

const Home: FC = () => {
  const teams = useSelector(selectTeams);
  const goToTeams = useSref('teams');
  useLoadTeams();
  return (
    <HomeContainer>
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
      <h6><a {...goToTeams}>Explorer les groupes</a></h6>
      <TeamList teams={teams} />
      <LineDivider />
    </HomeContainer>)
}

export default memo(Home);
