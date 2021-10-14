import styled from 'styled-components';

export const Avatar = ({
  imageUrl = 'https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  name,
}) => {
  return (
    <AvatarContainer>
      <img src={imageUrl} alt={`${name} Avatar`} />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  height: 40px;
  width: 40px;

  img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
  }
`;
