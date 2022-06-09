import { FC, memo, ReactNode } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Team } from '../../redux/interfaces';
import { API_URL } from '../common/constants';
import { EmailIcon, JoinIcon, PhoneIcon, SocialIcon } from '../common/Icons';
import { ContentContainer, SectionTitle } from './common';

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
        <SectionTitle>
          {name}
          <span className='small ps-2'>
            {social.facebook && (toSocialLink('facebook', social.facebook))}
            {social.twitter && (toSocialLink('twitter', social.twitter))}
            {social.instagram && (toSocialLink('instagram', social.instagram))}
          </span>
        </SectionTitle>
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
          {contact.addressStreetLine && (<AdressLine>{contact.addressStreetLine}</AdressLine>)}
          {contact.addressPostalCode && (<AdressLine>{contact.addressPostalCode}</AdressLine>)}
          {contact.addressCity && (<AdressLine>{contact.addressCity}</AdressLine>)}
          {contact.phoneNumber && (<AdressLine><PhoneIcon />{contact.phoneNumber}</AdressLine>)}
          {contact.email && (<AdressLine><EmailIcon />{contact.email}</AdressLine>)}
        </Col>
      </Row>
      <Description>{description}</Description>
      <p>{other}</p>
    </ContentContainer >
  )
}

export default memo(Details);
