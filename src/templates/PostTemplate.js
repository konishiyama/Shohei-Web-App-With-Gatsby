import React, {useContext} from 'react';
import styled from "styled-components"
import renderHTML from 'react-render-html'
import { PostComments } from '../components/common'
import { FirebaseContext } from '../components/Firebase';

const PostTemplate = (props) => {
  const {firebase} = useContext(FirebaseContext);
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
          <p>{renderHTML(props.pageContext.content)}</p>
        </PostItem>
        {!!firebase &&  
        <PostComments
            firebase= {firebase}
            postId= {props.pageContext.id}
          />
        }
      </div>
    </section>
  )
};

export default PostTemplate;