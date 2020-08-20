import React, { useContext, useState, useEffect } from "react"
import styled, { ThemeConsumer } from "styled-components"
import PostRoll from "../PostRoll"


export const IndexMemberPosts = ({firebase}) => {
  const[memberPosts, setMemberPosts] = useState([]);
  const memberPostsOrdered = memberPosts.sort(function(a, b) {
    if (a.postNum < b.postNum) {
        return 1;
    } else {
        return -1;
    }
  });
  const latestMemberPosts = memberPostsOrdered.slice(0,6);

  useEffect(() => {
    const unsubscribe = firebase.subscribeToMemberPosts({
      onSnapshot: (snapshot) => {
        console.log(snapshot);
        const snapshotMemberPosts = [];
        snapshot.forEach(doc => {
          const data = doc.Ud.Ze.proto.mapValue.fields;
          snapshotMemberPosts.push({
            postNum: data.articleNum,
            date: data.date,
            userPhoto: data.userPhoto,
            title: data.title,
            username: data.username,
            ...doc.data()
          })
        })
        setMemberPosts(snapshotMemberPosts);
      }
    })

    return () => {
      if(unsubscribe){
        // unsubscribe();  
      }
    }
  }, [])

  return(
  <>
  <section>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >
      {latestMemberPosts.map(post => (
         <PostRoll 
          title = {post.title}
          id = {post.id}
          date = {post.date}
          postNum = {post.postNum}
          username = {post.username}
          userPhoto = {post.userPhoto}
        />
      ))}
    </div>
  </section>
  </>
);
};
