import { FC, memo, ReactNode } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Team } from '../../redux/interfaces';
import { API_URL } from '../common/constants';
import { ContentContainer } from './common';

const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
`;

const TeamLogo = styled.img`
width: 100%;
height: auto;
margin-bottom: 8px;
`;

const JoinIcon = styled.i.attrs({
  className: 'bi-person-plus-fill bi'
})`
margin-right: 4px;
`;

const PhoneIcon = styled.i.attrs({
  className: 'bi bi-telephone-fill'
})`
margin-right: 4px;
`;

const EmailIcon = styled.i.attrs({
  className: 'bi bi-envelope'
})`
margin-right: 4px;
`;

const Description = styled.p`
font-style: italic;
`

const AdressLine = styled.p`
margin-bottom: 0;
`;

const TeamLogoContainer = styled(Col)`
 display: flex;
 align-items: center;
`;

interface SocialIconProps {
  className: string;
}

const SocialIcon = styled.i.attrs<SocialIconProps>((({ className }) => ({
  className: `bi bi-${className}`
})))`
margin-right: 4px;
`;

interface DetailsProps {
  team: Team;
  onJoinTeam: () => void; //TODO
}

type SocialType = 'facebook' | 'twitter' | 'instagram'

function toSocialLink(type: SocialType, link: string): ReactNode {
  return (
    <a target="_blank" rel="noreferrer" href={`https://www.${type}.com/${link}`}>
      <SocialIcon className={type} />
    </a>
  );
}

const Details: FC<DetailsProps> = ({ team, onJoinTeam }) => {
  const { name, id, description, other, contact, social } = team;
  return (
    <ContentContainer>
      <TitleContainer>
        <h5>
          {name}
          <span className='small ps-2'>
            {social.facebook ? (toSocialLink('facebook', social.facebook)) : null}
            {social.twitter ? (toSocialLink('twitter', social.twitter)) : null}
            {social.instagram ? (toSocialLink('instagram', social.instagram)) : null}
          </span>
        </h5>
        <Button size="sm" variant="outline-success" onClick={onJoinTeam}>
          <JoinIcon />
          Rejoindre
        </Button>
      </TitleContainer>
      <Row>
        <TeamLogoContainer xs={4}>
          <TeamLogo src={`${API_URL}/${id}/image`} alt='team-logo' />
        </TeamLogoContainer>
        <Col>
          {contact.addressStreetLine ? (<AdressLine>{contact.addressStreetLine}</AdressLine>) : null}
          {contact.addressPostalCode ? (<AdressLine>{contact.addressPostalCode}</AdressLine>) : null}
          {contact.addressCity ? (<AdressLine>{contact.addressCity}</AdressLine>) : null}
          {contact.phoneNumber ? (<AdressLine><PhoneIcon />{contact.phoneNumber}</AdressLine>) : null}
          {contact.email ? (<AdressLine><EmailIcon />{contact.email}</AdressLine>) : null}
        </Col>
      </Row>
      <Description>{description}</Description>
      <p>{other}</p>
    </ContentContainer >
  )
}

export default memo(Details);
