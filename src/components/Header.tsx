import React, { FC, memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
text-transform: uppercase;
font-size: 20px;
font-weight: 400;
`

const Header: FC = () => (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">
        <Title>
          BikeTeam
        </Title>
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default memo(Header);
