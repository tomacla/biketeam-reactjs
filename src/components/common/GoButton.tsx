import { FC, memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const BikeIcon = styled.i.attrs({
  className: 'bi bi-bicycle'
})`
margin-right: 4px;
`;


const GoButton: FC = () => {
  return (
    <Button size="sm" variant="outline-success">
      <BikeIcon />
      {'J\'y vais'}
    </Button>
  )
}

export default memo(GoButton);
