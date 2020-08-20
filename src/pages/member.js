import React, { useEffect, useContext, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PostRoll from "../components/PostRoll"
import { PageCover, BottomBar } from '../components/common';
import { FirebaseContext} from '../components/Firebase';
import CreateIcon from '@material-ui/icons/Create';

const Write = styled.a`
  text-decoration: none;
  color: #808080;
  color: #808080;
  &:hover{
    color: #4c9c41;
    transition: all 0.4s ease-in;
  }
`

const Member = ({data}) => {
  const allMemberPosts = data.allMemberPost.edges;
  const memberPostsOrdered = allMemberPosts.sort(function(a, b) {
    if (a.node.postNum < b.node.postNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestMemberPosts = memberPostsOrdered.slice(0,10);
  const {user, firebase} = useContext(FirebaseContext);
  // const[posts, setPosts] = useState([]);

  useEffect(() => {
    // const unsubscribe = firebase.subscribeToAllPosts(
      // onSnapshot: (snapshot) => {
      //   // console.log(snapshot);
      //   // const snapshotPosts = [];
      //   // snapshot.forEach(doc => {
      //   //   snapshotPosts.push({
      //   //     id: doc.id,
      //   //     ...doc.data()
      //   //   })
      //   // })
      //   // setPosts(snapshotPosts);
      // }

    // )

    return () => {
      // if(unsubscribe){
        // unsubscribe();  
      //   firebase.subscribeToAllPosts(r => {
      //     console.log(r);
      //   })
      // // }
    }
  }, [])



  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"
      alt="coverImg"></img>
      <p>
        <span>
          COMMUNITY
        </span>
      </p>
    </PageCover>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
      {latestMemberPosts.map(edge => (
        <PostRoll 
          title = {edge.node.title}
          id = {edge.node.id}
          date = {edge.node.date}
          username = {edge.node.username}
          userPhoto = {edge.node.userPhoto}
          postNum = {edge.node.postNum}
        />
      ))}
      <div
        style={{
          margin: `1.45rem auto 0 `,
          textAlign: `center`
        }}
      >
         {!!user  &&
         <BottomBar>
          <a 
            href="/member-write"
            style={{
              borderRadius: `50%`,
              margin: `0 0 0 auto`,
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <CreateIcon 
              style={{
                color: `white`,
                backgroundColor: `#4c9c41`,
                borderRadius: `50%`,
                padding: `0.5rem`,
                height: `3rem`,
                width: `3rem`,
                boxShadow: `rgba(0, 0, 0, 0.4) 0 2px 5px`,
              }}
            />
          </a>
        </BottomBar>
         } 
      </div>
    </div>
  </section>
  </>
);
}

export const query = graphql`
{
  allMemberPost {
    edges {
      node {
        date
        content
        id
        title
        username
        userPhoto
        postNum
      }
    }
  }
}
`

export default Member
