
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, { FC, memo } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { NavItem } from '../redux/interfaces';

const Title = styled.h1`
&:before{
  content:'bike';
  font-weight: 600;

}
text-transform: uppercase;
font-size: 20px;
font-weight: 500;
margin: 0;
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

const NavButton = styled(Nav.Link)`
  padding: 0;
`

interface HeaderProps {

  navItems: NavItem[];
  onGoHome: LinkProps;
  onGoFeed: LinkProps;
  onGoRides: LinkProps;
  onGoTrips: LinkProps;
  onGoMaps: LinkProps;
  selectedTeamId?: string;
}

function toTitle(item: NavItem): string {
  return {
    rides: 'Rides',
    trips: 'Trips',
    maps: 'Maps',
    feed: 'Actualité'
  }[item]
}


function toLink(item: NavItem, onGoHome: LinkProps,
  onGoFeed: LinkProps,
  onGoRides: LinkProps,
  onGoTrips: LinkProps,
  onGoMaps: LinkProps): LinkProps {
  return {
    rides: onGoRides,
    trips: onGoTrips,
    maps: onGoMaps,
    feed: onGoFeed
  }[item]
}

const Header: FC<HeaderProps> = ({ onGoHome, selectedTeamId, onGoFeed, onGoMaps, onGoRides, onGoTrips, navItems }) => {
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
                {navItems.map((navItem) => (
                  <Nav.Link key={navItem} {...toLink(navItem, onGoHome, onGoFeed, onGoRides, onGoTrips, onGoMaps)}>
                    {toTitle(navItem)}</Nav.Link>
                ))}
                <Link {...onGoHome}><HouseIcon /></Link>
              </>
            ) : (null)
          }
          <NavButton >
            <Button variant="outline-secondary" size="sm">Connexion</Button>
          </NavButton>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default memo(Header);
