import { useSref } from '@uirouter/react';
import { FC, memo } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { API_URL } from './constants';
import { DownloadIcon, MapIcon } from './Icons';

interface MapButtonGroupProps {
  teamId: string,
  mapId: string,
  fileName: string
  small: boolean
}

const Container = styled(ButtonGroup)`
  display: flex;
`
interface ButtonProps {
  type: string;
}

const Button = styled.a.attrs<ButtonProps>(({ type }) =>
  ({ className: type=== 'button' ? 'btn btn-outline-secondary btn-sm' : 'btn btn-light', role: 'button' }))``;



const MapButtonGroup: FC<MapButtonGroupProps> = ({ teamId, mapId, fileName, small }) => {
  const downloadGpx = `${API_URL}/${teamId}/maps/${mapId}/gpx`
  const downloadFit = `${API_URL}/${teamId}/maps/${mapId}/fit`
  const goToMap = useSref('map', { teamId, mapId });
  return (
    <Container>
      <Button type={small ? 'button' : 'link'} href={downloadGpx} download={`${fileName}.gpx`}>
        <DownloadIcon />
        {'GPX'}
      </Button>
      <Button type={small ? 'button' : 'link'} href={downloadFit} download={`${fileName}.fit`}>
        <DownloadIcon />
        {'FIT'}
      </Button>
      <Button type={small ? 'button' : 'link'} {...goToMap}>
        <MapIcon />
        {'Voir'}
      </Button>
    </Container>
  )
}

export default memo(MapButtonGroup);
