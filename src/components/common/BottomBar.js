import styled from 'styled-components';

export const BottomBar = styled.div`
  height: 10vh;
  position: fixed;
  bottom: 25px; 
  right: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 6.5vh;
  }
`