import { FC, memo } from 'react';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';

interface GroupBadgeProps {
  color?: string;
}

const GroupBadge = styled(Badge) <GroupBadgeProps>`
  margin-right: 4px;
  background-color: ${({ color }) : string | undefined => (color)} !important;
`;

interface BadgeListProps {
  badges: string[];
}

function toBadgeColor(badge: string): string | undefined {
  return {
    'G1': 'red',
    'G2': '#ff5324',
    'G3': '#eeb31e',
    'GRAVEL': 'chocolate',
    'CHILL': 'green',
  }[badge.toUpperCase()]
}

const BadgeList: FC<BadgeListProps> = ({ badges }) => {
  return (
    <p>
      {badges.map((badge) => <GroupBadge color={toBadgeColor(badge)} key={badge} bg="secondary">{badge}</GroupBadge>)}
    </p>
  )
}

export default memo(BadgeList);
