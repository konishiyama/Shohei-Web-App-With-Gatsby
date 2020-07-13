import React, {useContext} from 'react';
import Layout from "../components/layout"
import styled from "styled-components"
import { FirebaseContext } from '../components/Firebase';
import { ArticleComments } from '../components/common'


const ArticleTemplate = (props) => {
  const {firebase} = useContext(FirebaseContext)
  console.log(props);

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
          <p>{props.pageContext.time.slice(0, 10)}</p>
          <img src={props.pageContext.coverImage} alt="CoverImage"></img>
          <p>{props.pageContext.content}</p>
        </ArticleItem>
        {!!firebase &&  
          <ArticleComments
            firebase= {firebase}
            articleId= {props.pageContext.id}
          />
        }
      </div>
    </section>
  )
};

export default ArticleTemplate;