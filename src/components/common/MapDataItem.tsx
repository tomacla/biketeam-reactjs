import { FC, memo } from 'react';
import styled from 'styled-components';


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

const MapDataItem: FC<MapDataItemProps> = ({ length,
  positiveElevation,
  negativeElevation }) => {
  return (
    <Container>
      <Item>
        <DistanceIcon />
        {`${length}km`}
      </Item>
      <Item>
        <PositiveElevationIcon />
        {`${positiveElevation}m`}
      </Item>
      <Item>
        <NagativeElevationIcon />
        {`${negativeElevation}m`}
      </Item>
    </Container>
  )
}

export default memo(MapDataItem);
