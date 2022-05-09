import { useSref } from '@uirouter/react';
import React, { FC, memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
text-transform: uppercase;
font-size: 20px;
font-weight: 500;
margin: 8px 0 8px 0;
`
const NavTitle = styled(Navbar.Brand)`
padding: 0;
`

const Header: FC = () => {
  const goToHome = useSref('home');
  return (
    <Navbar bg="light">
      <Container>
        <NavTitle {...goToHome}>
          <Title>
            BikeTeam
          </Title>
        </NavTitle>
      </Container>
    </Navbar>
  )
}

export default memo(Header);
