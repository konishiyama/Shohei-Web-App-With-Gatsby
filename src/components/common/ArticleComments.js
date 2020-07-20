// import React, { useEffect, useState } from 'react';
// import styled from "styled-components"
// import {Button} from './Button';
// import {Input} from './Input';
// import moment from 'moment';

// const CommentForm = styled.form`
//   // display: flex;
//   margin-top: 32px;
  
//   ${Input}{
//     margin-right: 8px;
//     margin-top: 10px;
//     margin-bottom: auto;
//   }
  
//   ${Button}{
//     margin: 10px 0 auto;
//   }
// `

// const CommentListItem = styled.div`
//   >strong{
//     font-size: 80%;
//     color: #666;
//   }
  
//   border-bottom: 1px solid #ddd;
//   padding: 4px 0;
// `

// export const ArticleComments = ({firebase, articleId}) => {

//   const[comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState('');

//   useEffect(() => {
//     const unsubscribe = firebase.subscribeToArticleComments({
//       articleId,
//       onSnapshot: (snapshot) => {
//         console.log(snapshot);
//         const snapshotComments = [];
//         snapshot.forEach(doc => {
//           snapshotComments.push({
//             id: doc.id,
//             ...doc.data()
//           })
//         })
//         setComments(snapshotComments);
//       }
//     })

//     return () => {
//       if(unsubscribe){
//         // unsubscribe();   後で復活させる必要あり？
//       }
//     }
//   }, [])

//   function handlePostCommentSubmit(e){
//     e.preventDefault();
//     console.log(commentText);
//     firebase.postComment({
//       text: commentText,
//       articleId
//     })
//   }

//   return (
//     <div>
//       <CommentForm onSubmit={handlePostCommentSubmit}>
//         <Input value={commentText} onChange={e => {
//           e.persist();
//           setCommentText(e.target.value);
//         }} />
//         <Button type="submit">
//           Post
//         </Button>
//       </CommentForm>
//       {comments.map(comment => (
//         <CommentListItem key={comment.id}>
//           <strong>
//             {comment.username}
//           </strong>
//           <div>
//             {comment.text}
//           </div>
//         </CommentListItem>
//       ))}
//     </div>
//   )
// };