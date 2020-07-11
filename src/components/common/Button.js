import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  background: #0086d1;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  ${props => props.block ? 'display: block; width: 100%;' : ''}

  &:hover{
    opacity: 80%;
    cursor: pointer;
  }
` 