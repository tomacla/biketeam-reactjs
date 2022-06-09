import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { API_URL } from './constants';
import MapButtonGroup from './MapButtonGroup';
import MapDataItem from './MapDataItem';

const MapCardContainer = styled(Card)`
  margin: 8px 0 8px 0;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;

const Footer = styled.div``;

const EventImage = styled.img`
`;

interface MapCardProps {
  teamId: string,
  mapId: string,
  distance: number,
  positiveElevation: number,
  negativeElevation: number,
  fileName: string
}

const MapCard: FC<MapCardProps> = (
  {
    teamId,
    mapId,
    distance,
    positiveElevation,
    negativeElevation,
    fileName
  }) => {
  return (
    <MapCardContainer>
      <MapDataItem length={distance} positiveElevation={positiveElevation} negativeElevation={negativeElevation}/>
      <EventImage alt='carte du groupe' src={`${API_URL}/${teamId}/maps/${mapId}/image`} />
      <Footer>
        <MapButtonGroup small={false} mapId={mapId} teamId={teamId} fileName={fileName}/>
      </Footer>
    </MapCardContainer>
  )
}

export default memo(MapCard);
