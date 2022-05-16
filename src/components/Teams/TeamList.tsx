import React, { FC, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Team } from '../../redux/interfaces';
import styled from 'styled-components'
import TeamCard from './TeamCard';

interface TeamListProps {
  teams: Team[]
}

const TeamListContainer = styled.div`
height: 100%;
margin-bottom: 16px;
`;

const TeamCardContainer = styled(Col)`
width: 18rem;
`;

const TeamList: FC<TeamListProps> = ({ teams }) => {
  return (
    <TeamListContainer>
      <Row xs={1} md={4} className="g-4 justify-content-center" >
        {
          teams.length > 0 ? (
            teams.map(({ id, name, city }) => (
              <TeamCardContainer sm key={id}>
                <TeamCard teamId={id} name={name} city={city} />
              </TeamCardContainer>)))
            : (<h5>{'Pas d\'équipe trouvée'}</h5>)
        }
      </Row >
    </TeamListContainer>
  )
}

export default memo(TeamList);
