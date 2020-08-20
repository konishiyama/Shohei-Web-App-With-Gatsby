import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const EachArticle = styled.li`
  margin: 0 auto 1rem;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0.2rem 1rem;
`

const Container = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;

  p{
    text-align: left;
    color: #888;
    margin-bottom: 0.1rem;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
  margin: 0 auto;
  border-radius: 4px;
  `

const Thumnail = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`
const Title = styled.h3`
  width: 100%;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: #02102e;
  text-align: left;
  letter-spacing: normal;
  &:hover{
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const ArticleRoll = (props) => {
  return(
    <>
      <EachArticle>
        <Link 
          to={`/article/${props.articleNum}`}
          style={{
            textDecoration: `none`
          }}>
          <Container>
            <ImgContainer>
              <Thumnail src={props.thumnail}></Thumnail>
            </ImgContainer>
            <Title>{props.title}</Title>
            <p>{props.date}</p>
          </Container>
        </Link>
      </EachArticle>
    </>
    )
}

export default ArticleRoll
