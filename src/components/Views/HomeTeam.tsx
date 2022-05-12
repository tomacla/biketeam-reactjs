import { FC, memo } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const HomeTeamContainer = styled(Container)`
 min-height: calc(100vh - 104px);
display: flex;
align-items: center;
flex-direction: column;
`

const HomeTeam: FC = () => {
  return (
    <HomeTeamContainer>HomeTeam</HomeTeamContainer>
  )
}

export default memo(HomeTeam);
