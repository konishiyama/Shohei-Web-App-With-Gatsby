import styled from 'styled-components';

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  outline: none;

  &: focus, &:active{
    border: 1px solid #4c9c41;
  }
`