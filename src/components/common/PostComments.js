import React, { useEffect, useState, useContext } from 'react';
import styled, { ThemeConsumer } from "styled-components"
import { CommentContainer, CommentItemContainer,  CommentContent, CommentImage, Input, Button, TextArea  } from '../common';
import { FirebaseContext} from '../Firebase'
import { Link } from "gatsby"
// import moment from 'moment';

const CommentForm = styled.form`
  // display: flex;
  margin-top: 32px;
  
  ${TextArea}{
    margin-right: 8px;
    margin-top: 10px;
    margin-bottom: auto;
    height: 5rem;
  }
  
  ${Button}{
    margin: 10px 0 auto;
  }
`
const CommentButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  color: #4c9c41;
  margin: 0.3rem 0 0 auto;

`

const CommentListItem = styled.div`
  >strong{
    font-size: 80%;
    color: #666;
  }
  border-bottom: 1px solid #f4f4f4;
  padding: 4px 0;
`

export const PostComments = ({firebase, postId}) => {

  const { user } = useContext(FirebaseContext);
  const[comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [timeStamp, setTimeStamp] = useState('');
  const commentsOrdered = comments.sort(function(a, b) {
    if (a.timeCreated < b.timeCreated) {
        return -1;
    } else {
        return 1;
    }
  });

  useEffect(() => {
    const unsubscribe = firebase.subscribeToPostComments({
      postId,
      onSnapshot: (snapshot) => {
        // console.log(snapshot);
        const snapshotComments = [];
        snapshot.forEach(doc => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setComments(snapshotComments);
      }
    })

    return () => {
      if(unsubscribe){
        // unsubscribe();  
      }
    }
  }, [])

  function doReload() {
   window.location.reload();
  }

  function handlePostCommentSubmit(e){
    e.preventDefault();
    firebase.postComment({
      text: commentText,
      postId,
      photoURL: user.photoURL,
      username: user.username,
      memberPostId: postId,
      time: timeStamp,
    }).then(() => doReload())
  }

  return (
    <div
      style={{
        marginBottom: `1.45rem`
      }}
    >
      <CommentForm onSubmit={handlePostCommentSubmit}>
        <TextArea value={commentText} onChange={e => {
          e.persist();
          setCommentText(e.target.value);
          setTimeStamp(new Date().toLocaleString().slice(0, -3));
          console.log(user.username);
        }} />
        <div
          style={{
          display: `flex`,
          }}
        >
          <CommentButton type="submit">
            Comment
          </CommentButton>
        </div>
      </CommentForm>
      <div
       style={{
        borderTop: `1px solid #f8f8ff`,
       }}
      >
      {commentsOrdered.map(comment => (
        <CommentListItem key={comment.id}>
          <CommentItemContainer>
            <div
              style={{
                height: `100%`,
                display: `flex`,
                alignItems: `center`,
              }}
            >
            {!!comment.photoURL &&
              <CommentImage
                src={comment.photoURL}
              >
              </CommentImage>
            }
            {!comment.photoURL &&
              <CommentImage
                src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
              >
              </CommentImage>
            }
            </div>
            <div
             style={{
              fontSize: `1rem`,
              fontWeight: `bold`,
              color: `hsla(0, 0%, 0%, 0.8)`,
             }}
            >{comment.username}</div>
            {/* {!user.username &&
              <div
               style={{
                fontSize: `1rem`,
                fontWeight: `bold`,
                color: `hsla(0, 0%, 0%, 0.8)`,
               }}
              >削除</div>
            } */}
            <span
              style={{
                fontSize: `0.7rem`,
                marginLeft: `auto`,
                marginRight: `0`,
              }}
            >{comment.timeCreated}</span>
          </CommentItemContainer>
          <CommentContainer>
            <CommentContent>{comment.text}</CommentContent>
          </CommentContainer>
        </CommentListItem>
      ))}
      </div>
    </div>
  )
};