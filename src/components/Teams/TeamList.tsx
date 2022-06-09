import React, { FC, memo } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { Team } from '../../redux/interfaces';
import styled from 'styled-components'
import TeamCard from './TeamCard';
import PageButtons from '../common/PageButtons';

interface TeamListProps {
  teams: Team[];
  withPagination: boolean;
  nbPages: number;
  page: number;
  setPage: (page: number) => void;
}

const TeamListContainer = styled.div`
height: 100%;
margin-bottom: 16px;
`;

const PagintationContainer = styled.div`
margin-top: 8px;
`;

const TeamCardContainer = styled(Col)`
width: 18rem;
`;

const TeamList: FC<TeamListProps> = (
  { teams, withPagination, nbPages, page, setPage }
) => {
  return (
    <TeamListContainer>
      {teams.length > 0 ? (
        <Row xs={1} md={4} className="g-4 justify-content-center" >
          {
            teams.map(({ id, name, city }) => (
              <TeamCardContainer sm key={id}>
                <TeamCard teamId={id} name={name} city={city} />
              </TeamCardContainer>))
          }
        </Row >)
        : (<Alert variant='warning'>{'Pas d\'équipe trouvée'}</Alert>)}
      <PagintationContainer>
        {
          withPagination && <PageButtons
            nbPages={nbPages}
            page={page}
            setPage={setPage} />
        }
      </PagintationContainer>
    </TeamListContainer>
  )
}

export default memo(TeamList);
