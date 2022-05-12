import { FC, memo } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { API_URL } from '../common/constants';
import { ContentContainer } from './common';

const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
`;

const TeamLogo = styled.img`
width: 64px;
margin-bottom: 8px;
`;

const JoinIcon = styled.i.attrs({
  className: 'bi-person-plus-fill bi'
})`
margin-right: 4px;
`;

interface DetailsProps {
  name: string;
  description: string;
  teamId: string;
  onJoinTeam: () => void; //TODO
}

const Details: FC<DetailsProps> = ({ name, description, teamId, onJoinTeam }) => {
  return (
    <ContentContainer>
      <TitleContainer><h5>{name}</h5>
        <Button size="sm" variant="outline-success" onClick={onJoinTeam}>
          <JoinIcon />
          Rejoindre
        </Button>
      </TitleContainer>
      <Row>
        <Col xs={4}>
          <TeamLogo src={`${API_URL}/${teamId}/image`} alt='team-logo' />
        </Col>
      </Row>
      <p>{description}</p>
    </ContentContainer >
  )
}

export default memo(Details);
