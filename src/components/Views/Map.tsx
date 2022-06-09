import { useCurrentStateAndParams } from '@uirouter/react';
import { LatLngExpression } from 'leaflet';
import React, { FC, memo, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Map } from '../../redux/interfaces';
import { selectTeamMap } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { useTeamId } from '../common/hooks';
import { ContentContainer } from '../Team/common';
import MapDetails from '../Team/Map/MapDetails';
import { ViewContainer } from './common';

interface MapPropsResults {
  map?: Map;
}

export const useMapProps = (): MapPropsResults => {
  const dispatch = useActionsDispatch();
  const teamId = useTeamId();
  const {
    params: { mapId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId && mapId) dispatch(actions.getTeamMapAsync({ teamId, mapId }));
  }, [dispatch, mapId, teamId]);
  const map = useMemoizedSelector(selectTeamMap);
  return {
    map
  }
}

const MapViewContainer: FC = () => {
  const { map } = useMapProps();
  const position: LatLngExpression = { lat: 51.505, lng: -0.09 }
  // const gpxMap = useMap();
  if (!map) return <>Empty</>
  // const gpx = `${API_URL}/${map.teamId}/maps/${map.id}/gpx`;
  // new GPX(gpx, {
  //   async: true,
  //   marker_options: {
  //     startIconUrl: 'pin-icon-start.png',
  //     endIconUrl: 'pin-icon-end.png',
  //     shadowUrl: 'pin-shadow.png'
  //   }
  // })
  //   .on('loaded', (e:any) => {
  //     var gpx = e.target;
  //     gpxMap.fitBounds(gpx.getBounds());
  //   })
  //   .addTo(gpxMap);



  return (
    <ViewContainer>
      <MapDetails map={map} />
      <ContentContainer>
        <MapContainer style={{ height: '50vh' }} center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a>'
            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </MapContainer>
      </ContentContainer>
      <ContentContainer>
        Denivelé
      </ContentContainer>
    </ViewContainer>)
}

export default memo(MapViewContainer);


