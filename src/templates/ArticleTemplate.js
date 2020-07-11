import React, {useContext} from 'react';
import Layout from "../components/layout"
import styled from "styled-components"
// import BookItem from "../components/BookItem"
// import {BookComments} from "../components/common"
import { FirebaseContext } from '../components/Firebase';


const ArticleTemplate = (props) => {
  // const {firebase} = useContext(FirebaseContext)

  const ArticleItem = styled.section`
  `

  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1rem 1.45rem`,
        }}
      >
      <ArticleItem>
        <h2>{props.pageContext.title}</h2>
        <img src={props.pageContext.coverImage} alt="CoverImage"></img>
        <p>{props.pageContext.content}</p>
      </ArticleItem>
     {/* <ArticleItem
      coverImage = {props.pageContext.imageUrl}
      authorName = {props.pageContext.author.name}
      articleTitle = {props.pageContext.title}
      /> */}
      {/* {!!firebase &&
      // <BookComments firebase={firebase} bookId = {props.pageContext.id} />
      } */}
      </div>
    </Layout>
  )
};

export default ArticleTemplate;