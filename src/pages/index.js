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
    if (a.node.articleNum < b.node.articleNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestPosts = articlesOrdered.slice(0,4);
  const allMemberPosts = data.allMemberPost.edges;
  const memberPostsOrdered = allMemberPosts.sort(function(a, b) {
    if (a.node.postNum < b.node.postNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestMemberPosts = memberPostsOrdered.slice(0,10);

  return(
  <>
  <section>
    <Fade {...fadeProperties}>
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f"/>
      <CoverPic src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050" />
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample6.jpg?alt=media&token=9b723082-8601-4d5a-8561-a9f898b09d5e"/>
      <CoverPic src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample7.jpg?alt=media&token=85fc967d-5da8-4903-8d34-a01f5aa69d65"/>
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
      {latestMemberPosts.map(edge => (
        <PostRoll 
          title = {edge.node.title}
          id = {edge.node.id}
          date = {edge.node.date}
          username = {edge.node.username}
          userPhoto = {edge.node.userPhoto}
          postNum = {edge.node.postNum}
        />
      ))}
      <div
          style={{
            margin: `2.5rem auto 0 `,
            textAlign: `center`
          }}
        >
          <SeeMore 
            href="/member"
            >>>もっと見る
          </SeeMore>
      </div>
      </div>
    }
    <SubTitle>
      <span>
        Mission
      </span>
    </SubTitle>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

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
          articleNum = {edge.node.articleNum}
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
        News
      </span>
    </SubTitle>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
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
        content
        articleNum
      }
    }
  }
  allMemberPost {
    edges {
      node {
        date
        content
        id
        title
        username
        userPhoto
        postNum
      }
    }
  }
}
`

export default IndexPage
