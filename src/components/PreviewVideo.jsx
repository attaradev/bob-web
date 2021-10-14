import styled, { keyframes } from 'styled-components';
import CloseIcon from '../assets/icons/Close';
import { Avatar } from '../modules/common/avatar';
import Button from '../modules/common/button';
import { TextArea } from '../modules/common/text-area';

export const PreviewVideo = ({ setOpenVideoPreview, previewVideoUrl,handleVideoUpload }) => {
  return (
    <>
      <PreviewContainer aria-label='Bottom drawer'>
        <div className='bottom--sheet-container'>
          <div className='previewContent'>
            <div className='previewHeading'>
              <h1>Video title</h1>
              <CloseIcon
                size={30}
                color='#000'
                onClick={() => setOpenVideoPreview(false)}
              />
            </div>

            <VideoContent>
              <Avatar name='Efia' />
              <TextArea />
            </VideoContent>

            <VideoThumbnail>
              {/* Kindly add the video tag */}
              <img src={previewVideoUrl} alt='Sing' />
            </VideoThumbnail>
            <div className='uploadsBtn'>
              <Button onClick={handleVideoUpload}>Upload</Button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpenVideoPreview(null)}
          className='drawer--background'
        />
      </PreviewContainer>
    </>
  );
};

const animateDrawer = keyframes`
0% {
  height:0%;
  opacity:0.4;
}



100%{
  height: calc(100% - 7rem)
  opacity:1;
}
`;

const VideoContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const VideoThumbnail = styled.div`
  height: 350px;
  width: 100%;
  margin-top: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PreviewContainer = styled.div`

.uploadsBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
}
  .previewHeading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .previewContent {
    height: calc(100vh + 400px);
    padding: 2rem;
    padding-bottom: 400px;
    background: #fff;
    overflow-y: auto;
    box-shadow: var(--level-3);
    border-radius: 6px 6px 0 0;
  }
  .drawer--background {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .bottom--sheet-container {
    position: fixed;
    width: 100%;
    height: calc(100% - 7rem);
    bottom: 0;
    left: 0;
    z-index: 1000;
    animation: ${animateDrawer} 0.7s ease-in-out;
  }

  @media (max-width: 701px) {
    .bottom--sheet-container {
      height: calc(100% - 12rem);
    }
  }

  .wrapper {
    height: 100%;
  }
`;
