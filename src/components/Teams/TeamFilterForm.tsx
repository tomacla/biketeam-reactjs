import React, { FC, memo } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Country } from '../../redux/interfaces';
import { SubmitFormHandler } from './interfaces';

const InputGroupWithMargin = styled(InputGroup)`
margin: 8px 0 8px 0;
`

const ColWithMargin = styled(Col)`
margin: 8px 0 8px 0;
display: flex;
justify-content: center;
`
interface TeamFormProps {
  countries: Country[];
  onSubmit: SubmitFormHandler
}

const TeamFilterForm: FC<TeamFormProps> = ({ onSubmit, countries }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <InputGroupWithMargin>
              <InputGroup.Text>Nom</InputGroup.Text>
              <Form.Control name='name' type="text" placeholder="Nom du groupe" />
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <InputGroupWithMargin >
              <InputGroup.Text>Ville</InputGroup.Text>
              <Form.Control name='city' type="text" placeholder="Ville" />
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <InputGroupWithMargin >
              <InputGroup.Text>Pays</InputGroup.Text>
              <Form.Select name='country' id="country">
                <option value={undefined}>{''}</option>
                {countries.map(({ label, code }) => (<option key={code} value={code}>{label}</option>))}
              </Form.Select>
            </InputGroupWithMargin>
          </Col>
          <ColWithMargin xs={12} md={1} lg={1}>
            <Button variant="secondary" type="submit">
              Valider
            </Button>
          </ColWithMargin>
        </Row>
      </Form>
    </Container>
  )
}

export default memo(TeamFilterForm);
