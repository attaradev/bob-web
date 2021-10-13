import styled from 'styled-components';
import { useState } from 'react';

export const TextArea = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <TextAreaStyled
      value={textValue}
      onChange={event => setTextValue(event.target.value)}
      autoComplete="true"
    />
  );
};

const TextAreaStyled = styled.textarea`
  border: none;
  outline: none;
  border: 2px solid #ddd;
  background: #e1e1e1;
  border-radius: 6px;
  padding: 0.9rem 1rem;
  font-family: inherit;
  height: 60px;
  width: 100%;
  margin-left: 2rem;
`;
