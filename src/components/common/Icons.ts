import styled from 'styled-components';

export const BikeIcon = styled.i.attrs({
  className: 'bi bi-bicycle'
})`
margin-right: 4px;
`;

export const DownloadIcon = styled.i.attrs({
  className: 'bi bi-download'
})`
margin-right: 4px;
`;

export const MapIcon = styled.i.attrs({
  className: 'bi bi-map'
})`
margin-right: 4px;
`;

export const DistanceIcon = styled.i.attrs({
  className: 'bi bi-arrow-left-right'
})`
margin-right: 4px;
`;

export const PositiveElevationIcon = styled.i.attrs({
  className: 'bi bi-arrow-up'
})`
margin-right: 4px;
`;

export const NagativeElevationIcon = styled.i.attrs({
  className: 'bi bi-arrow-down'
})`
margin-right: 4px;
`;

export const JoinIcon = styled.i.attrs({
  className: 'bi-person-plus-fill bi'
})`
margin-right: 4px;
`;

export const PhoneIcon = styled.i.attrs({
  className: 'bi bi-telephone-fill'
})`
margin-right: 4px;
`;

export const EmailIcon = styled.i.attrs({
  className: 'bi bi-envelope'
})`
margin-right: 4px;
`;

interface SocialIconProps {
  className: string;
}

export const SocialIcon = styled.i.attrs<SocialIconProps>((({ className }) => ({
  className: `bi bi-${className}`
})))`
margin-right: 4px;
`;

export const SeeIcon = styled.i.attrs({
  className: 'bi bi-eye-fill'
})`
margin-right: 4px;
`;

interface BikeIconProps {
  className: string;
}

export const EventIcon = styled.i.attrs<BikeIconProps>((({ className }) => ({
  className: `bi bi-${className}`
})))`
margin: 0 4px 0 4px;
`;

