import { FC, memo } from 'react';
import { Button } from 'react-bootstrap';
import { BikeIcon } from './Icons';

const GoButton: FC = () => {
  return (
    <Button size="sm" variant="outline-success">
      <BikeIcon />
      {'J\'y vais'}
    </Button>
  )
}

export default memo(GoButton);
