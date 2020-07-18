import React, {useContext} from 'react';
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const EachArticle = styled.li`
  width: 50%;
  margin: 0 auto 1rem;

`

const Container = styled.div`
  width: 150px;
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
  height: 100px;
  margin-bottom: 0.5rem;

`
const Title = styled.h3`
  width: 100%;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  color: #02102e;
  text-align: left;
  &:hover{
    color: #0086d1;
    transition: all 0.4s ease-in;
  }
`

const ArticleContainer = (props) => {
  console.log(props)
  return (
    <>
    <ArticleList>
      {props.data.allArticle.edges.map(edge => (
        <EachArticle>
          <Link 
            to={`/article/${edge.node.id}`}
            style={{
              textDecoration: `none`
            }}>
            <Container>
              <p>{edge.node.time.slice(0,10)}</p>
              <Thumnail src={edge.node.thumnail}></Thumnail>
              <Title>{edge.node.title}</Title>
            </Container>
          </Link>
        </EachArticle>
      )
      )}
    </ArticleList>
    </>
  );
}

export const query = graphql`
{
  allArticle {
    edges {
      node {
        category
        content
        coverImage
        id
        thumnail
        title
      }
    }
  }
}

`

export default ArticleContainer