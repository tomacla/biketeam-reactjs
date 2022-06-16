import { useCurrentStateAndParams } from '@uirouter/react';
import { Track } from 'gpxparser';
import { LatLngExpression } from 'leaflet';
import React, { FC, memo, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Map } from '../../redux/interfaces';
import { selectTeamCurrentCourse, selectTeamMap } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { useTeamId } from '../common/hooks';
import { ContentContainer } from '../Team/common';
import MapDetails from '../Team/Map/MapDetails';
import { ViewContainer } from './common';
import 'leaflet.elevation/dist/Leaflet.Elevation-0.0.2.min.js'
import { MyMap } from './MapViewer';

interface MapPropsResults {
  map?: Map;
  course?: Track;
}

export const useMapProps = (): MapPropsResults => {
  const dispatch = useActionsDispatch();
  const teamId = useTeamId();
  const {
    params: { mapId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId && mapId) {
      dispatch(actions.getTeamMapAsync({ teamId, mapId }));
      dispatch(actions.parseGpxFileAsync({ teamId, mapId }));
    }
  }, [dispatch, mapId, teamId]);
  return {
    map: useMemoizedSelector(selectTeamMap),
    course: useMemoizedSelector(selectTeamCurrentCourse),
  }
}

const MapViewContainer: FC = () => {
  const { map, course} = useMapProps();
  const position: LatLngExpression = { lat: 47.218371, lng: -1.553621 }
  if (!map) return <></>
  return (
    <ViewContainer>
      <MapDetails map={map} />
      <ContentContainer>
        <MapContainer style={{ height: '50vh' }} center={position} zoom={13} >
          <TileLayer
            attribution='&copy; <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases">CyclOSM</a>'
            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
          />
          <MyMap course={course} />
          {/* <Polyline
            pathOptions={{ fillColor: 'red', color: 'red', weight: 4 }}
            positions={points}
          /> */}
          {/* <Marker position={course ? points[0] : position} icon={StartIcon} /> */}
          {/* <Marker position={course ? points[points.length-1] : position} icon={EndIcon} /> */}
        </MapContainer>
      </ContentContainer>
    </ViewContainer>)
}

export default memo(MapViewContainer);


