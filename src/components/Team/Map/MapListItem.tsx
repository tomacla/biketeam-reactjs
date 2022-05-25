import moment from 'moment';
import 'moment/locale/fr';
import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Map } from '../../../redux/interfaces';
import { API_URL } from '../../common/constants';
import MapButtonGroup from '../../common/MapButtonGroup';
import MapDataItem from '../../common/MapDataItem';

const MapListItemContainer = styled(Card)`
  margin: 8px 0 8px 0;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
`;

const Footer = styled(Card.Footer)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const EventImage = styled.img`
`;

const PostedAt = styled.div`
  font-size: .875em;
  color: #6c757d;
`;

const Title = styled.h5`
`

interface MapListItemProps {
  map: Map
}

const MapListItem: FC<MapListItemProps> = (
  {
    map
  }) => {
  const { length, positiveElevation, negativeElevation, id, teamId, postedAt, name } = map;
  return (
    <MapListItemContainer>
      <EventImage alt='carte du groupe' src={`${API_URL}/${teamId}/maps/${id}/image`} />
      <Card.Body>
        <Title>{name}</Title>
        <MapDataItem length={length} positiveElevation={positiveElevation} negativeElevation={negativeElevation}/>
      </Card.Body>
      <Footer>
        <PostedAt>{moment(postedAt).format('LL')}</PostedAt>
        <MapButtonGroup small mapId={id} teamId={teamId} fileName={'fileName'} />
      </Footer>
    </MapListItemContainer>
  )
}

export default memo(MapListItem);
