import React, { FC, memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer: FC = () => (
  <Navbar bg="light">
    <Container>
      <div>©2022 Biketeam</div>
      <div>Une création N-Peloton</div>
    </Container>
  </Navbar>
)

export default memo(Footer);
