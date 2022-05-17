
import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import MainContainer from './components/MainContainer';

const Container = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
`

const App: FC = () => (
  <Container>
    <HeaderContainer />
    <MainContainer />
    <Footer />
  </Container>
)

export default App;
