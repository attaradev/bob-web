import styled from 'styled-components';
import CheckCircle from '../assets/icons/Check';
import TrashIcon from '../assets/icons/Trash';

export const RemoveVideo = () => {
  return (
    <Wrapper>
      <div className='inner'>
        <CheckCircle size={25} color='red' />
        <span>Lorem, ipsum dolor sit amet consectetur .</span>
      </div>
      <div className='imageContainer'>
        <img
          src='https://image1.masterfile.com/getImage/NjkzLTA1NTUyOTIzZW4uMDAwMDAwMDA=AFimpF/693-05552923en_Masterfile.jpg'
          alt='Sing'
        />
        <TrashIcon size={25} color='#fff' className='remove__icon' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 50%;
    margin: auto;

    span {
      font-size: 1.5rem;
    }
  }

  .imageContainer {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      margin-top: 1rem;
    }

    .remove__icon {
      position: absolute;
      top: 20px;
      right: 10px;
    }
  }
`;
