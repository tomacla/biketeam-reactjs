import { useSref } from '@uirouter/react';
import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { API_URL } from '../common/constants';

const TeamCardContainer = styled(Card)`
display: flex;  
align-items: center;
`

const TeamLogo = styled(Card.Img)`
padding: 8px;
width: 100%;
height: 180px;
object-fit: contain;
`

const TeamBody = styled(Card.Body)`
border-top: 1px solid rgba(0, 0, 0, 0.125);
width: 100%;
padding: 0px;
`;

const TeamTitle = styled(Card.Title)`
font-weight: bold;
padding: 16px 16px 0px 16px;
a{
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
`

const TeamText = styled(Card.Text)`
padding: 0px 16px 16px 16px ;
`;

interface TeamCardProps {
  teamId: string;
  name: string;
  city: string;
}

const TeamCard: FC<TeamCardProps> = ({ teamId, name, city }) => {
  const goToTeamDetails = useSref('homeTeam', { teamId });
  return (
    <TeamCardContainer>
      <TeamLogo variant="top" alt={teamId} src={`${API_URL}/${teamId}/image`} />
      <TeamBody>
        <TeamTitle>
          <a {...goToTeamDetails}>{name}</a>
        </TeamTitle>
        <TeamText>
          {city}
        </TeamText>
      </TeamBody>
    </TeamCardContainer>
  )
}

export default memo(TeamCard);
