import React, { Children } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

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

const IndexPage = (props) => {
  console.log(props);
  return(
  <>
  <Layout>
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
      <div>
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
    </div>
  </Layout>
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
