import React, { FC, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Map } from '../../../redux/interfaces';
import PageButtons from '../../common/PageButtons';
import MapListItem from './MapListItem';

interface MapListProps {
  nbPages: number;
  page: number;
  maps: Map[];
  setPage: (page: number) => void;
}

const MapList: FC<MapListProps> = (
  { nbPages, page, maps, setPage }
) => {
  return (
    <>
      <Row>
        {maps.map((map) => (
          <Col xs={12} md={4} key={map.id}>
            <MapListItem map={map} />
          </Col>))}
      </Row>
      <PageButtons
        nbPages={nbPages}
        page={page}
        setPage={setPage} />
    </>
  )
}

export default memo(MapList);
