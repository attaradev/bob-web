import { useRef } from 'react';

export const useFilePicker = () => {
  const fileRef = useRef(null);
  const handleDocumentClick = () => fileRef.current?.click();

  return { fileRef, handleDocumentClick };
};
