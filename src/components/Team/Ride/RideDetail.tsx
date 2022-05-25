import moment from 'moment';
import { FC, memo } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../common/constants';
import { ContentContainer } from '../common';

const Image = styled.img.attrs({
  className: 'mx-auto d-block shadow rounded w-100 h-auto mx-auto'
})`
width: 100%;
height: auto;
margin-bottom: 8px;
`;

const Title = styled.h4`
  font-size: 24px;
`

const Date = styled.h5`
  color: #6c757d!important;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`

interface DetailsProps {
  title: string;
  teamId: string
  date: Date;
  id: string;
  description: string;
  imaged: boolean
}

const Details: FC<DetailsProps> = ({ title, id, description, imaged, teamId, date }) => {
  return (
    <ContentContainer>
      <Title>
        {title}
      </Title>
      <Date>{moment(date).format('LL')}</Date>
      {imaged ? (<Image src={`${API_URL}/${teamId}/rides/${id}/image`} alt='team-logo' />) : null}
      <p>{description}</p>
    </ContentContainer >
  )
}

export default memo(Details);
