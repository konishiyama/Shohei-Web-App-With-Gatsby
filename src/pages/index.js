import React, { useContext } from "react"
import styled from "styled-components"
import {  IndexArticles, IndexMemberPosts, SubTitle, Button } from '../components/common';
import { graphql } from "gatsby"
import {FirebaseContext} from '../components/Firebase';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const CoverPic = styled.img`
  margin: 0;
  maxWidth: 960;
  padding: 0 0 0;
  height: 630px;
  object-fit: cover;
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

const IndexPage = ({data}) => {
  const { user, firebase } = useContext(FirebaseContext);

  return(
  <>
  <section
    style={{
      // backgroundColor: `#f7f9f9`
    }}
  >

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
      {!!firebase &&  
      <IndexMemberPosts
        firebase= {firebase}
      />
      }
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
    </div>
    <SubTitle>
      <span>
         Recent Posts
      </span>
    </SubTitle>
    {!!firebase &&  
    <IndexArticles
        firebase= {firebase}
      />
    }
     <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
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
    <div
      style={{
        // border: `1px solid #e2e8f0`,
        borderRadius: `5px`,
        width: `100%`,
        backgroundColor: `#fff`,
        padding: `1rem 0.5rem 1rem`
      }}
    >
      <a 
      href="https://www.instagram.com/dlwlrma/?hl=ja"
      target= "_blank"
      style={{
        // border: `0 solid #e2e8f0`,
        borderRadius: `5px`
      }}
      >
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FInstagram-thumnail.png?alt=media&token=7a577e36-5c8f-43d9-9032-4911cac0b762"
          style={{
            borderRadius: `5px`,
          }}
        ></img>
      </a>
      <div
        style={{
          margin: `0rem auto 1rem`,
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
