import { FC, memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Map } from '../../../redux/interfaces';
import MapListItem from './MapListItem';

interface MapListProps {
  maps: Map[];
}

const MapList: FC<MapListProps> = ({ maps }) => {
  return (
    <Container>
      <Row>
        {maps.map((map) => (
          <Col xs={12} md={4} key={map.id}>
            <MapListItem map={map}/>
          </Col>))}
      </Row>
    </Container>
  )
}

export default memo(MapList);
