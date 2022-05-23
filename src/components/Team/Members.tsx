import { FC, memo } from 'react';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import { TeamMember } from '../../redux/interfaces';
import { ContentContainer, SectionTitle } from './common';
import Member from './Member';

const MemberList = styled.div`
display:flex;
flex-flow: row wrap;
gap: 8px 8px;
`;

interface MembersProps {
  members: TeamMember[];
}

const Members: FC<MembersProps> = ({ members }) => {
  return (
    <ContentContainer>
      <SectionTitle>Membres <Badge bg="secondary">{members.length}</Badge></SectionTitle>
      <MemberList>
        {
          members.map(({ name, image }) => (
            <Member key={name} name={name} image={image} />
          ))
        }
      </MemberList >
    </ContentContainer>
  )
}

export default memo(Members);
