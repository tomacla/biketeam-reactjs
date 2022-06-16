/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import L from 'leaflet';
import { useMap } from 'react-leaflet';
// import * as elevation from '@raruto/leaflet-elevation';

export function MyMap(props) {
  const { course } = props;
  const map = useMap();
  const StartIcon = L.icon({
    iconUrl: 'https://www.biketeam.info/css/pin-icon-start.png',
    iconSize: [33, 45],
    iconAnchor: [16, 45],
    shadowSize: [50, 50],
    shadowAnchor: [25, 50],
  });

  const EndIcon = L.icon({
    iconUrl: 'https://www.biketeam.info/css/pin-icon-end.png',
    iconSize: [33, 45],
    iconAnchor: [16, 45],
    shadowSize: [50, 50],
    shadowAnchor: [25, 50],
  });

  // const elevation_options = {
  //   theme: 'red-theme',
  //   detached: true,
  //   elevationDiv: '#chart-wrapper',
  //   followMarker: true,
  //   imperial: false,
  //   reverseCoords: false,
  //   acceleration: false,
  //   slope: false,
  //   speed: false,
  //   time: false,
  //   summary: false,
  //   downloadLink: false,
  //   ruler: false,
  //   legend: false
  // };

  // var controlElevation = L.control.elevation(elevation_options).addTo(map);

  // controlElevation.on('eledata_loaded', data => {
  //   var startPoint = data.data[0].geometry.coordinates[0];
  //   var endpoint = data.data[0].geometry.coordinates[data.data[0].geometry.coordinates.length - 1];

  //   L.marker([startPoint[1], startPoint[0]], { clickable: false, icon: StartIcon }).addTo(map);
  //   L.marker([endpoint[1], endpoint[0]], { clickable: false, icon: EndIcon }).addTo(map);
  // });
  // controlElevation.load(`${URL}/ab/maps/77b95433-22b0-4e73-982b-f76eee1d8571/gpx}`);

  const points = course ? course.points.map(p => ({ lat: p.lat, lng: p.lon })) : [];
  new L.Polyline(points, { fillColor: 'red', color: 'red', weight: 4 }).addTo(map);
  new L.Marker(points[0], { icon: StartIcon }).addTo(map);
  new L.Marker(points[points.length - 1], { icon: EndIcon }).addTo(map);
  // new L.control.elevation(elevation_options).addTo(map);
  return null;
}
