import styled from 'styled-components';

export const SubTitle = styled.div`
  margin: 4rem auto 3rem;
  text-align: center;

  span{
    font-family: Avenir Next Condensed;
    font-weight: 200;
    letter-spacing: 0.03em;
    font-size: 25px;
    color: #444444;
    margin: 0 auto;
  }
  span:after {
    content: "";
    display: block;
    height: 1px;
    width: 40vw;
    margin: 1.5rem auto 0;
    background-color: #4C9C41;
  }
`