import React from 'react';
import styled from "styled-components"
import renderHTML from 'react-render-html'

const ArticleTemplate = (props) => {

  const ArticleItem = styled.section`
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
          <p>{renderHTML(props.pageContext.content)}</p>
        </ArticleItem>
      </div>
    </section>
  )
};

export default ArticleTemplate;