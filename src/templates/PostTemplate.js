import React, {useContext} from 'react';
import styled from "styled-components"
import { FirebaseContext } from '../components/Firebase';
import renderHTML from 'react-render-html'

const PostTemplate = (props) => {
  const {firebase} = useContext(FirebaseContext)

  const PostItem = styled.section`
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
        <PostItem>
          <h2>{props.pageContext.title}</h2>
          <p>{props.pageContext.date}</p>
          <img src={props.pageContext.thumnail} alt="CoverImage"></img>
          <p>{renderHTML(props.pageContext.content)}</p>
        </PostItem>
      </div>
    </section>
  )
};

export default PostTemplate;