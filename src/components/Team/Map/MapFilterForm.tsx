import React, { FC, memo } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitFormHandler } from '../../Teams/interfaces';
import { MapFilterFormOptions } from './interfaces';

const InputGroupWithMargin = styled(InputGroup)`
margin: 8px 0 8px 0;
`

const ColWithMargin = styled(Col)`
padding: 8px;
display: flex;
justify-content: center;
`

interface MapFilterFormProps {
  onSubmit: SubmitFormHandler;
  options: MapFilterFormOptions;
}

const MapFilterForm: FC<MapFilterFormProps> = ({ onSubmit, options }) => {
  const { types, winds, sorts, tags } = options
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <InputGroupWithMargin>
              <InputGroup.Text>Nom</InputGroup.Text>
              <Form.Control type='texte' name='name' placeholder="Nom" />
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={6}>
            <InputGroupWithMargin>
              <InputGroup.Text>Tags</InputGroup.Text>
              <Form.Select multiple name='tags'>
                {tags.map(tag => (
                  <option key={tag.value} value={tag.value}>
                    {tag.label}
                  </option>
                ))}
              </Form.Select>
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <InputGroupWithMargin>
              <InputGroup.Text>Type</InputGroup.Text>
              <Form.Select name='type' >
                <option value={undefined}>{}</option>
                {types.map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
              </Form.Select>
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <InputGroupWithMargin>
              <InputGroup.Text>Vents</InputGroup.Text>
              <Form.Select name='windDirection' >
                <option value={undefined}>{}</option>
                {winds.map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
              </Form.Select>
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <InputGroupWithMargin>
              <InputGroup.Text>Tri</InputGroup.Text>
              <Form.Select name='sort' >
                <option value={undefined}>{}</option>
                {sorts.map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
              </Form.Select>
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={5}>
            <InputGroupWithMargin>
              <InputGroup.Text>Distance</InputGroup.Text>
              <Form.Control type='number' name='lowerDistance' placeholder="0" />
              <InputGroup.Text>à</InputGroup.Text>
              <Form.Control type='number' name='upperDistance' placeholder="1000" />
              <InputGroup.Text>km</InputGroup.Text>
            </InputGroupWithMargin>
          </Col>
          <Col xs={12} md={5}>
            <InputGroupWithMargin>
              <InputGroup.Text>Dénivelé</InputGroup.Text>
              <Form.Control type='number' name='lowerPositiveElevation' placeholder="0" />
              <InputGroup.Text>à</InputGroup.Text>
              <Form.Control type='number' name='upperPositiveElevation' placeholder="200" />
              <InputGroup.Text>m</InputGroup.Text>
            </InputGroupWithMargin>
          </Col>
          <ColWithMargin xs={12} md={1}>
            <Button variant="secondary" type="submit">
              Valider
            </Button>
          </ColWithMargin>
        </Row>
      </Form>
    </Container>
  )
}

export default memo(MapFilterForm);
