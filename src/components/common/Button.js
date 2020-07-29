import styled from 'styled-components';

export const Button = styled.button`
  padding: 6px 10px;
  background: #0086d1;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  ${props => props.block ? 'display: block; width: 20%;' : ''}
  margin-top: 1rem;
  &:hover{
    opacity: 80%;
    cursor: pointer;
  }
` 