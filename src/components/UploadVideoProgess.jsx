import styled from 'styled-components';
import CloseIcon from '../assets/icons/Close';

export const UploadVideoProgess = ({ progress = 80 }) => {
  return (
    <Wrapper progress={progress}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpGJq6rl_ZcgtFRnQPbyjBdmf6fnwmpITaw&usqp=CAU'
        alt=''
        className='videoUploadProgress__image'
      />
      <div className='videoUploadProgress__info'>
        <h3>Ma Video</h3>
        <div className='videoUploadProgress__bar' />
        <div className='videoUploadProgress__time'>
          <span>5 minutes remaining</span>
        </div>
      </div>

      <CloseIcon className='videoProgress__close' color='#000' size={30} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;

  .videoUploadProgress__image {
    width: 90px;
    width: 90px;
    object-fit: cover;
    border-radius: 6px;
  }

  .videoUploadProgress__info {
    margin-left: 10px;
    width: 100%;
    margin-top: 0.2rem;
  }

  .videoUploadProgress__bar {
    height: 8px;
    width: 100%;
    border-radius: 15px;
    background-color: ${({ progress }) =>
      progress >= 1 ? '#f35858' : '#ff0000'};
    position: relative;

    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 80%;
      background: red;
      border-radius: 15px;
    }
  }

  .videoUploadProgress__time {
    color: grey;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  
  .videoProgress__close {
    position: absolute;
    top: 4px;
    right: 10px;
  }
`;
