import React from 'react';
import styled from "styled-components"
import renderHTML from 'react-render-html'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from "react-share";

const ArticleTemplate = (props) => {

  const ArticleItem = styled.section`
  border-bottom: 1px solid #f4f4f4
  `

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1.5rem 1.45rem`,
        }}
      >
        <ArticleItem>
          <h2>{props.pageContext.title}</h2>
          <p>{props.pageContext.date}</p>
          <img src={props.pageContext.thumnail} alt="CoverImage"></img>
          <p
            style={{
              marginBottom:`1.45em`
            }}
          >{renderHTML(props.pageContext.content)}</p>
        </ArticleItem>
        <div
          style={{
            marginTop:`1.45em`
          }}
        >
          <FacebookShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}>
            <FacebookIcon 
            size={ `2rem` } 
            round
            style={{
              marginRight:`0.4em`
            }} />
          </FacebookShareButton>
          <TwitterShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}>
            <TwitterIcon 
            size={ `2rem` } 
            round
            style={{
              marginRight:`0.4em`
            }} 
            />
          </TwitterShareButton>
          <LineShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}>
            <LineIcon 
            size={ `2rem` } 
            round
            style={{
              marginRight:`0.4em`
            }} 
            />
          </LineShareButton>
        </div>
      </div>
    </section>
  )
};

export default ArticleTemplate;