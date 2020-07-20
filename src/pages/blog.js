import React, { Children } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticleRoll from "../components/ArticleRoll"
import { PageCover } from '../components/common';


const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const IndexPage = (props) => {
  return(
  <>
  <section>
    <PageCover>
      <img src="/img/coversample3.jpg"></img>
      <p>
        <span>
          BLOG
        </span>
      </p>
    </PageCover>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
    <ArticleList>
     {props.data.allArticle.edges.map(edge => (
      <ArticleRoll 
        title = {edge.node.title}
        // time = {edge.node.time}
        thumnail = {edge.node.thumnail}
        id = {edge.node.id}
      />
      ))}
    </ArticleList>
      </div>
  </section>
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

export default IndexPage
