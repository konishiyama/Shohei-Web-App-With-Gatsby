import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components"
import {Button} from './Button';
import {Input} from './Input';
import { FirebaseContext} from '../Firebase'
import moment from 'moment';

const CommentForm = styled.form`
  // display: flex;
  margin-top: 32px;
  
  ${Input}{
    margin-right: 8px;
    margin-top: 10px;
    margin-bottom: auto;
  }
  
  ${Button}{
    margin: 10px 0 auto;
  }
`

const CommentListItem = styled.div`
  >strong{
    font-size: 80%;
    color: #666;
  }
  
  border-bottom: 1px solid #ddd;
  padding: 4px 0;
`

export const PostComments = ({firebase, postId}) => {

  const { user} = useContext(FirebaseContext);
  const[comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');


  useEffect(() => {
    const unsubscribe = firebase.subscribeToPostComments({
      postId,
      onSnapshot: (snapshot) => {
        console.log(snapshot);
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

  function handlePostCommentSubmit(e){
    e.preventDefault();
    console.log(commentText);
    firebase.postComment({
      text: commentText,
      postId,
      photoURL: user.photoURL,
      username: user.username,
      memberPostId: postId,
    })
  }

  return (
    <div>
      <CommentForm onSubmit={handlePostCommentSubmit}>
        <Input value={commentText} onChange={e => {
          e.persist();
          setCommentText(e.target.value);
          console.log(postId);
        }} />
        <Button type="submit">
          Post
        </Button>
      </CommentForm>
      {comments.map(comment => (
        <CommentListItem key={comment.id}>
          <strong>
            {comment.username}
          </strong>
          <div>
            {comment.text}
          </div>
        </CommentListItem>
      ))}
    </div>
  )
};