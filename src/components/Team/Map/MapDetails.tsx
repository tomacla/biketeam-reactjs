import { FC, memo } from 'react';
import styled from 'styled-components';
import { Map } from '../../../redux/interfaces';
import BadgeList from '../../common/BadgeList';
import { toFormatedDate } from '../../common/Date';
import MapButtonGroup from '../../common/MapButtonGroup';
import MapDataItem from '../../common/MapDataItem';
import { ContentContainer } from '../common';

interface MapDetailsProps {
  map: Map
}

const Title = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
`

const Date = styled.h6`
  color: #6c757d!important;
  font-size: .875em;
`

const MapDetails: FC<MapDetailsProps> = ({ map }) => {
  const { name, postedAt, positiveElevation, negativeElevation, length, teamId, id, tags } = map;
  return (
    <ContentContainer>
      <Title>
        {name}
      </Title>
      <Date>Ajouté le {toFormatedDate(postedAt)}</Date>
      <MapDataItem length={length} positiveElevation={positiveElevation} negativeElevation={negativeElevation} />
      <BadgeList badges={tags} />
      <MapButtonGroup teamId={teamId} mapId={id} fileName={'todo'} small={true} />
    </ContentContainer>
  )
}

export default memo(MapDetails);
