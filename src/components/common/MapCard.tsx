import 'moment/locale/fr';
import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { API_URL } from './constants';
import MapButtonGroup from './MapButtonGroup';

const MapCardContainer = styled(Card)`
  margin: 8px 0 8px 0;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2px 0 2px 0;
`;

const Footer = styled.div``;

const Item = styled.div``;

const DistanceIcon = styled.i.attrs({
  className: 'bi bi-arrow-left-right'
})`
margin-right: 4px;
`;

const PositiveElevationIcon = styled.i.attrs({
  className: 'bi bi-arrow-up'
})`
margin-right: 4px;
`;

const NagativeElevationIcon = styled.i.attrs({
  className: 'bi bi-arrow-down'
})`
margin-right: 4px;
`;

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
      <Header>
        <Item>
          <DistanceIcon/>
          {`${distance}km`}
        </Item>
        <Item>
          <PositiveElevationIcon/>
          {`${positiveElevation}m`}
        </Item>
        <Item>
          <NagativeElevationIcon/>
          {`${negativeElevation}m`}
        </Item>
      </Header>
      <EventImage alt='carte du groupe' src={`${API_URL}/${teamId}/maps/${mapId}/image`} />
      <Footer>
        <MapButtonGroup mapId={mapId} teamId={teamId} fileName={fileName}/>
      </Footer>
    </MapCardContainer>
  )
}

export default memo(MapCard);
