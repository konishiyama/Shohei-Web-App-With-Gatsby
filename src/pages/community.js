import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PostRoll from "../components/PostRoll"
import { PageCover } from '../components/common';


const Community = ({data}) => {
  // const allArticles = data.allArticle.edges;
  // const articlesOrdered = allArticles.sort(function(a, b) {
  //   if (a.node.date < b.node.date) {
  //       return 1;
  //   } else {
  //       return -1;
  //   }
  // });

  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"></img>
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
      {/* {articlesOrdered.map(edge => ( */}
        <PostRoll 
          // title = {edge.node.title}
          // time = {edge.node.time}
          // thumnail = {edge.node.thumnail}
          // id = {edge.node.id}
          // date = {edge.node.date}
        />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
        <PostRoll />
      </div>
      <br></br>
      <br></br>
  </section>
  </>
);
}

// export const query = graphql`
// {
//   allArticle {
//     edges {
//       node {
//         id
//         thumnail
//         title
//         date
//       }
//     }
//   }
// }
// `

export default Community
