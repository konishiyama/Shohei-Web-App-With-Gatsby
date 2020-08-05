import React, { useContext } from "react"
import styled from "styled-components"
import {  SubTitle } from '../components/common';
import PostRoll from "../components/PostRoll"
import { graphql } from "gatsby"
import ArticleRoll from "../components/ArticleRoll"
import {FirebaseContext} from '../components/Firebase';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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

const SeeMore = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover{
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const fadeProperties = {
  duration: 2000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  arrows: false,
}

const IndexPage = ({ data }) => {
  const { user } = useContext(FirebaseContext);
  const allArticles = data.allArticle.edges;
  const articlesOrdered = allArticles.sort(function(a, b) {
    if (a.node.date < b.node.date) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestPosts = articlesOrdered.slice(0,4);

  return(
  <>
  <section>
    <Fade {...fadeProperties}>
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f"/>
      <CoverPic src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050" />
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample6.jpg?alt=media&token=9b723082-8601-4d5a-8561-a9f898b09d5e"/>
    </Fade>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
    
    {!!user  && 
      <div>
      <SubTitle>
        <span>
          Community
        </span>
      </SubTitle>
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <PostRoll />
      <div
          style={{
            margin: `2.5rem auto 0 `,
            textAlign: `center`
          }}
        >
          <SeeMore 
            href="/community"
            >>>もっと見る
          </SeeMore>
      </div>
      </div>
    }
    
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
          date = {edge.node.date}
        />
      ))}
    </ArticleList>
      <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      >
        <SeeMore 
          href="/blog"
          >>>もっと見る
        </SeeMore>
      </div>

    <SubTitle>
      <span>
        Twitter
      </span>
    </SubTitle>
    <a class="twitter-timeline" data-lang="ja" data-width="360" data-height="410" data-theme="light" href="https://twitter.com/GekidanHitori?ref_src=twsrc%5Etfw" 
    style={{
      textDecoration: `none`
    }} target="_blank">Tweets by GekidanHitori</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <div
        style={{
          margin: `1.5rem auto 0 `,
          textAlign: `center`
        }}
      >
        <SeeMore 
          href="https://www.twitter.com/"
          target= "_blank"
        >>>もっと見る
        </SeeMore>
      </div>
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
    <div
      style={{
        margin: `1.5rem auto 3rem`,
        textAlign: `center`
      }}
    >
      <SeeMore 
        href="https://www.instagram.com/dlwlrma/?hl=ja"
        target= "_blank"
      > >>もっと見る
      </SeeMore>
    </div>
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

export default IndexPage
