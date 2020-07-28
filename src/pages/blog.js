import React from "react"
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

const Blog = ({data}) => {
  const allArticles = data.allArticle.edges;
  const latestPosts = allArticles.slice(0, 6);

  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample3.jpg?alt=media&token=52fe4ca0-416a-4402-b74d-782209f0a044"></img>
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
      {latestPosts.map(edge => (
        <ArticleRoll 
          title = {edge.node.title}
          time = {edge.node.time}
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
        id
        thumnail
        title
      }
    }
  }
}
`

export default Blog
