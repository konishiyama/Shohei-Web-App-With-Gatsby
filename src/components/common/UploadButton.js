import styled from 'styled-components';

export const UploadButton = styled.button`
  padding: 0 8px;
  background: #0086d1;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  height: 25px;
  line-height: 25px;
  ${props => props.block ? 'display: block; width: 10%;' : ''}

  &:hover{
    opacity: 80%;
    cursor: pointer;
  }
` 