import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticleRoll from "../components/ArticleRoll"
import { PageCover } from '../components/common';
import CreateIcon from '@material-ui/icons/Create';

const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  :after{
    content:"";
    display:block;
    margin: 0 auto 1rem;
    padding: 0.5rem 0.2rem 1rem;
    width: 174.7px;
    height:160px;
  }
`

const Blog = ({data}) => {
  const allArticles = data.allArticle.edges;
  const articlesOrdered = allArticles.sort(function(a, b) {
    if (a.node.date < b.node.date) {
        return 1;
    } else {
        return -1;
    }
  });

  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
      alt="coverImg"
      ></img>
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
      {articlesOrdered.map(edge => (
        <ArticleRoll 
          title = {edge.node.title}
          time = {edge.node.time}
          thumnail = {edge.node.thumnail}
          id = {edge.node.id}
          date = {edge.node.date}
          articleNum = {edge.node.articleNum}
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
        date
      }
    }
  }
}
`

export default Blog
