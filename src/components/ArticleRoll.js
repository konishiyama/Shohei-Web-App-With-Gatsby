import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const EachArticle = styled.li`
  margin: 0 auto 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  width: 90%;
`

const Container = styled.div`
  width: 100%;
  text-align: center;

  p{
    text-align: left;
    color: #888;
    margin-bottom: 0.1rem;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  `

const Thumnail = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
`

const TextContainer = styled.div`
  width: 90%;
  margin: 0.5rem auto;
`

const Title = styled.h3`
  padding-top: 0.5rem;
  height: 3.4em
  font-size: 18px;
  line-height: 1.6;
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

const Date = styled.p`
  width: 100%;
  text-decoration: none;
  letter-spacing: normal;
  padding-bottom: 0.7rem;
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
            <TextContainer>
              <Title>{props.title}</Title>
              <Date>{props.date}</Date>
            </TextContainer>
          </Container>
        </Link>
      </EachArticle>
    </>
    )
}

export default ArticleRoll
