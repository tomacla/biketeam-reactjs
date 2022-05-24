import React, { FC, memo } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitFormHandler } from '../Teams/interfaces';

const InputGroupWithMargin = styled(InputGroup)`
margin: 8px 0 8px 0;
`

const ColWithMargin = styled(Col)`
margin: 8px;
display: flex;
justify-content: center;
`
interface PeriodFilterFormProps {
  onSubmit: SubmitFormHandler
}

const PeriodFilterForm: FC<PeriodFilterFormProps> = ({ onSubmit }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <InputGroupWithMargin>
              <InputGroup.Text>Du</InputGroup.Text>
              <Form.Control type='date' name='from' placeholder="Date de début" />
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={5} lg={5}>
            <InputGroupWithMargin >
              <InputGroup.Text>Au</InputGroup.Text>
              <Form.Control name='to' type="date" placeholder="Date de fin" />
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

export default memo(PeriodFilterForm);
