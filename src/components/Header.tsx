
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import React, { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { ColorTheme, COLOR_THEME_DARK, COLOR_THEME_LIGHT, useThemeContext } from '../contexts/themeContext';
import { NavItem } from '../redux/interfaces';


const DefaultTitle = styled.h1`
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

const NPTitle = styled(DefaultTitle)`
&:before{
  content:'n';
}
&:after{
  content:'peloton';
}`

const Title = styled.h1`
  font-weight: 600;
text-transform: uppercase;
font-size: 20px;
font-weight: 500;
margin: 0;
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
  onGoMainHome: LinkProps;
  selectedTeamId?: string;
  title?: string;
}

function toItemTitle(item: NavItem): string {
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

function toTitle(title?: string): ReactNode {
  if (!title) {
    return <DefaultTitle />
  }
  if (title === 'N-Peloton') {
    return <NPTitle />
  }
  return <Title >{title}</Title>
}

interface HeaderPropResults {
  darkMode: ColorTheme;
  handleSetTheme: () => void
}

function useHeaderProps(): HeaderPropResults {
  const [darkMode, setDarkMode] = React.useState(false);
  const themeContext = useThemeContext();
  const handleSetTheme = useCallback(() => {
    setDarkMode(!darkMode);
    themeContext?.changeTheme((darkMode ? COLOR_THEME_LIGHT : COLOR_THEME_DARK) as ColorTheme);
  }, [darkMode, themeContext])
  return {
    darkMode: useMemo(() => (darkMode ? COLOR_THEME_LIGHT : COLOR_THEME_DARK), [darkMode]),
    handleSetTheme
  }
}

const Header: FC<HeaderProps> = (
  { title, onGoHome, selectedTeamId, onGoFeed, onGoMaps, onGoRides, onGoTrips, onGoMainHome, navItems }
) => {
  const { darkMode, handleSetTheme } = useHeaderProps()
  return (
    <Navbar bg="light">
      <Container>
        <NavTitle {...onGoHome}>
          {toTitle(title)}
        </NavTitle>
        <Nav className="ms-auto align-items-center">
          {
            selectedTeamId ? (
              <>
                {navItems.map((navItem) => (
                  <Nav.Link key={navItem} {...toLink(navItem, onGoHome, onGoFeed, onGoRides, onGoTrips, onGoMaps)}>
                    {toItemTitle(navItem)}</Nav.Link>
                ))}
                <Link {...onGoMainHome}><HouseIcon /></Link>

              </>
            ) : (null)
          }
          <Form.Check
            type="switch"
            value={darkMode}
            onChange={handleSetTheme}
          />
          <NavButton >
            <Button variant="outline-secondary" size="sm">Connexion</Button>
          </NavButton>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default memo(Header);
