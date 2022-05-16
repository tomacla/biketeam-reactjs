
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, { FC, memo } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h1`
&:before{
  content:'bike';
  font-weight: 600;

}
text-transform: uppercase;
font-size: 20px;
font-weight: 500;
margin: 8px 0 8px 0;
&:after{
  content:'team';
  font-weight: 400;
  color: #6c757d;
}
`

const NavTitle = styled(Navbar.Brand)`
padding: 0;
`

const Link = styled.a`
color: rgba(0,0,0,.55);
text-decoration: none;
padding: 8px;
&:hover{
  color: black;
}
`

const HouseIcon = styled.i.attrs({
  className: 'bi bi-house'
})`
margin-right: 4px;
`;

interface HeaderProps {
  onGoHome: LinkProps;
  onGoFeed: LinkProps;
  onGoRides: LinkProps;
  onGoTrips: LinkProps;
  onGoMaps: LinkProps;
  selectedTeamId?: string;
}

const Header: FC<HeaderProps> = ({ onGoHome, selectedTeamId, onGoFeed, onGoMaps, onGoRides, onGoTrips }) => {
  return (
    <Navbar bg="light">
      <Container>
        <NavTitle {...onGoHome}>
          <Title />
        </NavTitle>
        <Nav className="ms-auto align-items-center">
          {
            selectedTeamId ? (
              <>
                <Nav.Link {...onGoFeed}>Actualité</Nav.Link>
                <Nav.Link {...onGoRides}>Rides</Nav.Link>
                <Nav.Link {...onGoTrips}>Trips</Nav.Link>
                <Nav.Link {...onGoMaps}>Maps</Nav.Link>
                <Link {...onGoHome}><HouseIcon /></Link>
              </>
            ) : (null)
          }
          <Nav.Link >
            <Button variant="outline-secondary" size="sm">Connexion</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default memo(Header);
