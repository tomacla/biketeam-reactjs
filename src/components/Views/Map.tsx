import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { Map } from '../../redux/interfaces';
import { selectTeamMap } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { ContentContainer } from '../Team/common';
import MapDetails from '../Team/Map/MapDetails';
import { ViewContainer } from './common';

interface MapPropsResults {
  map?: Map;
}

export const useMapProps = (): MapPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId, mapId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    dispatch(actions.getTeamMapAsync({ teamId, mapId }));
  }, [dispatch, mapId, teamId]);
  const map = useMemoizedSelector(selectTeamMap);
  return {
    map
  }
}


const MapViewContainer: FC = () => {
  const { map } = useMapProps();
  if (!map) return <>Empty</>

  return (
    <ViewContainer>
      <MapDetails map={map} />
      <ContentContainer>
        map
      </ContentContainer>
      <ContentContainer>
        Denivelé
      </ContentContainer>
    </ViewContainer>)
}

export default memo(MapViewContainer);


