import { FC, memo } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';

interface MemberProps {
  name: string;
  image: string;
}

const ProfileImage = styled.img.attrs({
  className: 'rounded'
})`
height: 32px;
width: 32px;
`

const Member: FC<MemberProps> = ({ name, image }) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderTooltip = (props: unknown) => {
    return (
      <Tooltip  {...props}>{name}</Tooltip>
    )
  };
  return (
    <OverlayTrigger
      delay={{ hide: 450, show: 300 }}
      overlay={renderTooltip}
      placement="bottom"
    >
      <ProfileImage src={image}></ProfileImage>
    </OverlayTrigger>
  )
}

export default memo(Member);
