import { FC, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Map } from '../../../redux/interfaces';
import MapListItem from './MapListItem';


interface MapListProps {
  maps: Map[];
}

const MapListContainer = styled.div`
  margin: 0 10% 0 10%;
`

const MapList: FC<MapListProps> = ({ maps }) => {
  return (
    <MapListContainer>
      <Row>
        {maps.map((map) => (
          <Col xs={12} md={4} key={map.id}>
            <MapListItem map={map}/>
          </Col>))}
      </Row>
    </MapListContainer>
  )
}

export default memo(MapList);
