import React, { FC, memo } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Map } from '../../../redux/interfaces';
import MapListItem from './MapListItem';

const CenteredCol = styled(Col)`
display:flex ;
justify-content: center;
`

interface MapListProps {
  nbPages: number;
  page: number;
  maps: Map[];
  onFirstPageClick: () => void;
  onLastPageClick: () => void;
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
}

const MapList: FC<MapListProps> = (
  { nbPages, page, maps, onFirstPageClick, onLastPageClick, onPrevPageClick, onNextPageClick }
) => {
  return (
    <>
      <Row>
        {maps.map((map) => (
          <Col xs={12} md={4} key={map.id}>
            <MapListItem map={map} />
          </Col>))}
      </Row>
      <Row>
        <CenteredCol>
          <Pagination>
            <Pagination.First onClick={onFirstPageClick} />
            <Pagination.Prev disabled={page === 0} onClick={onPrevPageClick} />
            <Pagination.Item disabled >{page}</Pagination.Item>
            <Pagination.Next disabled={page === nbPages - 1} onClick={onNextPageClick} />
            <Pagination.Last onClick={onLastPageClick} />
          </Pagination>
        </CenteredCol>
      </Row>
    </>
  )
}

export default memo(MapList);
