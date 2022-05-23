import { FC, memo } from 'react';
import styled from 'styled-components';
import { API_URL } from '../common/constants';
import { ContentContainer, SectionTitle } from './common';

const HeatMapImage = styled.img.attrs({
  className: 'mx-auto d-block shadow w-100 h-auto mx-auto'
})``;

interface HeatMapProps {
  teamId: string;
}

const HeatMap: FC<HeatMapProps> = ({ teamId }) => {
  return (
    <ContentContainer>
      <SectionTitle>HeatMap</SectionTitle>
      <HeatMapImage alt={teamId} src={`${API_URL}/${teamId}/heatmap?width=500`} />
    </ContentContainer>
  )
}

export default memo(HeatMap);
