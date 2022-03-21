import React, { FC, memo } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Team } from '../redux/interfaces';
import { API_URL } from './constants';
import styled from 'styled-components'

interface TeamListProps {
  teams: Team[]
}

const TeamCardContainer = styled(Col)`
width: 18rem;
`;

const TeamCard = styled(Card)`
display: flex;  
align-items: center;
`

const TeamLogo = styled(Card.Img)`
padding: 8px;
width: 180px;
height: 180px;

`

const TeamBody = styled(Card.Body)`
border-top: 1px solid rgba(0, 0, 0, 0.125);
width: 100%;
padding: 0px;
`;

const TeamTitle = styled(Card.Title)`
font-weight: bold;
padding: 16px 16px 0px 16px;
`

const TeamText = styled(Card.Text)`
padding: 0px 16px 16px 16px ;
`;

const TeamList: FC<TeamListProps> = ({ teams }) => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4 justify-content-center" >
      {
        teams.map(({ id, name, city }) => (
          <TeamCardContainer sm key={id}>
            <TeamCard>
              <TeamLogo variant="top" alt={id} src={`${API_URL}/${id}/image`} />
              <TeamBody>
                <TeamTitle>{name}</TeamTitle>
                <TeamText>
                  {city}
                </TeamText>
              </TeamBody>
            </TeamCard>
          </TeamCardContainer>))
      }
    </Row >

  )
}

export default memo(TeamList);
