import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const EachArticle = styled.li`
  margin: 0 auto 1rem;

`

const Container = styled.div`
  width: 160px;
  text-align: center;
  margin: 0 auto;

  p{
    text-align: left;
    color: #888;
    margin-bottom: 0.1rem;
  }
`

const Thumnail = styled.img`
  width: 100%;
  height: 105px;
  margin-bottom: 0.5rem;

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
    color: #0086d1;
    transition: all 0.4s ease-in;
  }
`

const ArticleRoll = (props) => {
  return(
    <>
      <EachArticle>
        <Link 
          to={`/article/${props.id}`}
          style={{
            textDecoration: `none`
          }}>
          <Container>
            <p>{props.date}</p>
            <Thumnail src={props.thumnail}></Thumnail>
            <Title>{props.title}</Title>
          </Container>
        </Link>
      </EachArticle>
    </>
    )
}

export default ArticleRoll
