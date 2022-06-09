import { FC, memo } from 'react';
import styled from 'styled-components';
import { DistanceIcon, PositiveElevationIcon, NagativeElevationIcon } from './Icons';


interface MapDataItemProps {
  length: number;
  positiveElevation: number;
  negativeElevation: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2px 0 2px 0;
`;

const MapDataItem: FC<MapDataItemProps> = ({ length,
  positiveElevation,
  negativeElevation }) => {
  return (
    <Container>
      <div>
        <DistanceIcon />
        {`${length}km`}
      </div>
      <div>
        <PositiveElevationIcon />
        {`${positiveElevation}m`}
      </div>
      <div>
        <NagativeElevationIcon />
        {`${negativeElevation}m`}
      </div>
    </Container>
  )
}

export default memo(MapDataItem);
