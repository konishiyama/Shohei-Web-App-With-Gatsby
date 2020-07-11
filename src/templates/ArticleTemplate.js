import React, {useContext} from 'react';
// import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import {BookComments} from "../components/common"
import { FirebaseContext } from '../components/Firebase';


const ArticleTemplate = (props) => {
  const {firebase} = useContext(FirebaseContext)
  return (
    <section>
     <ArticleItem
      coverImage = {props.pageContext.imageUrl}
      authorName = {props.pageContext.author.name}
      articleTitle = {props.pageContext.title}
      />
      {/* {!!firebase &&
      // <BookComments firebase={firebase} bookId = {props.pageContext.id} />
      } */}
    </section>
  )
};

export default ArticleTemplate;