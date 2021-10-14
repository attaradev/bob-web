import { useState } from 'react';
import { useFilePicker } from '../lib/useFilePicker';
import styled from 'styled-components';
import VideoUploadIcon from '../assets/icons/VideoUpload';
import { PreviewVideo } from './PreviewVideo';

export const UploadVideo = () => {
  const { fileRef, handleDocumentClick } = useFilePicker();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState(null);

  const handleVideoFileChange = event => {
    setPreviewVideoUrl(URL.createObjectURL(event.target.files[0]));
    setSelectedVideo(event.target.files[0]);
  };

  const handleVideoUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedVideo);
    formData.append('file', selectedVideo.name);
    console.log('videoFile', selectedVideo);

    // send data to the server
  };
  return (
    <>
      <Wrapper>
        <div onClick={handleDocumentClick}>
          <div>
            <VideoUploadIcon size={30} color='red' />
          </div>
        </div>
        <input
          id='file'
          name='file'
          type='file'
          aria-label='Upload Video'
          hidden
          ref={fileRef}
          onChange={event => handleVideoFileChange(event)}
        />
      </Wrapper>

      {selectedVideo ? (
        <PreviewVideo
          handleVideoUpload={handleVideoUpload}
          previewVideoUrl={previewVideoUrl}
          setOpenVideoPreview={setSelectedVideo}
        />
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #000;
  height: 100px;
  border-radius: 8px;
  cursor: pointer;
  margin-top:1rem;
`;
