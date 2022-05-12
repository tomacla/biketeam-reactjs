import { FC, memo } from 'react';
import { Badge, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { TeamMember } from '../../redux/interfaces';
import Member from './Member';

const MembersContainer = styled(Container)`
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #dee2e6!important;
`

const MemberList = styled.div`
display:flex;
flex-direction: row;
gap: 8px 8px;
`;


interface MembersProps {
  members: TeamMember[];
}



const Members: FC<MembersProps> = ({ members }) => {
  return (
    <MembersContainer>
      <h5>Membres <Badge bg="secondary">{members.length}</Badge></h5>

      <MemberList>
        {
          members.map(({ name, image }) => (
            <Member key={name} name={name} image={image} />
          ))
        }
      </MemberList >
    </MembersContainer>
  )
}

export default memo(Members);
