import React, { Children } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ArticleRoll from "../components/ArticleRoll"

const CoverPic = styled.img`
  margin: 0;
  maxWidth: 960;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;
`

const Index = styled.div`
  margin: 4rem auto 2rem;
  text-align: center;

  span{
    font-family: Avenir Next Condensed;
    font-weight: 200;
    letter-spacing: 0.03em;
    font-size: 28px;
    color: #444444;
    margin: 0 auto;
  }
`

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
    <CoverPic src="/img/progile-pic.jpg"></CoverPic>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
    <Index>
      <span>
         Recent Posts
      </span>
    </Index>
    <ArticleList>
     {props.data.allArticle.edges.map(edge => (
      <ArticleRoll 
        title = {edge.node.title}
        time = {edge.node.time}
        thumnail = {edge.node.thumnail}
        id = {edge.node.id}
      />
      ))}
    </ArticleList>
        <Index>
          <span>
            Twitter
          </span>
        </Index>
        <a class="twitter-timeline" data-lang="ja" data-width="360" data-height="410" data-theme="light" href="https://twitter.com/GekidanHitori?ref_src=twsrc%5Etfw" 
        style={{
          textDecoration: `none`
        }} target="_blank">Tweets by GekidanHitori</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <Index>
          <span>
            Instagram
          </span>
        </Index>
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
        category
        content
        coverImage
        id
        thumnail
        title
        time
      }
    }
  }
}

`

export default IndexPage
