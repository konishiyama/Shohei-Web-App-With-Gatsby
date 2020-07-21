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
  
  const allArticles = data.allArticle.edges;
  const latestPosts = allArticles.slice(0, 4);

  return(
  <>
  <section>
    <CoverPic src="/img/progile-pic.jpg"></CoverPic>
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
      <img src="/img/Instagram-thumnail.png"></img>
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
        }
      }
    }
  }
`

export default IndexPage
