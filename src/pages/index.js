import React from "react"
import styled from "styled-components"
import {  SubTitle } from '../components/common';
import { graphql } from "gatsby"
import ArticleRoll from "../components/ArticleRoll"

const CoverPic = styled.img`
  margin: 0;
  maxWidth: 960;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;
`

const ArticleList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: space-between;
`

const IndexPage = ({ data }) => {
  console.log(data);
  const allArticles = data.allArticle.edges;
  const articlesOrdered = allArticles.sort(function(a, b) {
    if (a.node.time < b.node.time) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestPosts = articlesOrdered.slice(0,6);

  return(
  <>
  <section>
    <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fprofile-pic.jpg?alt=media&token=85714a7f-1863-4a7d-92f2-973a70964737"></CoverPic>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
    <SubTitle>
      <span>
         Recent Posts
      </span>
    </SubTitle>
    <ArticleList>
      {latestPosts.map(edge => (
        <ArticleRoll 
          title = {edge.node.title}
          time = {edge.node.time}
          thumnail = {edge.node.thumnail}
          id = {edge.node.id}
          time = {edge.node.time}
        />
      ))}
    </ArticleList>
      <p>
        <a 
          href="/blog"
          style={{
            textDecoration: `none`
          }}
          >もっと見る
        </a>
      </p>
    <SubTitle>
      <span>
        Twitter
      </span>
    </SubTitle>
    <a class="twitter-timeline" data-lang="ja" data-width="360" data-height="410" data-theme="light" href="https://twitter.com/GekidanHitori?ref_src=twsrc%5Etfw" 
    style={{
      textDecoration: `none`
    }} target="_blank">Tweets by GekidanHitori</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <SubTitle>
      <span>
        Instagram
      </span>
    </SubTitle>
    <a 
    href="https://www.instagram.com/dlwlrma/?hl=ja"
    target= "_blank"
    >
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FInstagram-thumnail.png?alt=media&token=7a577e36-5c8f-43d9-9032-4911cac0b762"></img>
    </a>
    <p>
      <a 
        href="https://www.instagram.com/dlwlrma/?hl=ja"
        target= "_blank"
        style={{
          textDecoration: `none`
        }}
        >もっと見る
      </a>
    </p>
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
          number
          time
        }
      }
    }
  }
`

export default IndexPage
