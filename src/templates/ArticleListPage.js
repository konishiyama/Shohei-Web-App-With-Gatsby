// import React from "react";
// import { Link, graphql } from "gatsby";
// import styled from "styled-components"
// import ArticleRoll from "../components/ArticleRoll"


// const ArticleList = styled.ul`
//   display: flex;
//   list-style: none;
//   font-size: 14px;
//   margin: 0;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `


// const ArticleListPage = ({ data, pageContext }) => {
//   const { index } = pageContext;
//   const allArticles = data.allArticle.edges;
//   const numPosts = data.site.siteMetadata.settings.postsPerOnePage;
//   const startIndex = (index - 1) * numPosts;
//   const endIndex = index * numPosts > allArticles ? allArticles : index * numPosts;
//   const posts = allArticles.slice(startIndex, endIndex);

//   /* 前の/次の記事一覧ページへのリンク */
//   const navigation = (
//     <nav>
//       <ul
//         style={{
//           display: `flex`,
//           flexWrap: `wrap`,
//           justifyContent: `space-between`,
//           listStyle: `none`,
//           padding: 0,
//         }}
//       >
//         <li>
//           {index > 1 && (
//             <Link to={index !== 2 ? `articles${index - 1}` : `/`} rel="prev">
//               ← Newer Posts
//             </Link>
//           )}
//         </li>
//         <li>
//           {index !== Math.ceil(allArticles.length / numPosts) && (
//             <Link to={`articles${index + 1}`} rel="next">
//               Older Posts →
//             </Link>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );

//   return (
//     <div>
//       {navigation}
//       <ArticleList>
//         {posts.map(edge => (
//             <ArticleRoll 
//               title = {edge.node.title}
//               time = {edge.node.time}
//               thumnail = {edge.node.thumnail}
//               id = {edge.node.id}
//             />
//             ))}
//       </ArticleList>
//       {navigation}
//     </div>
//   );
// };

// export default ArticleListPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         settings {
//           postsPerOnePage
//         }
//       }
//     }
//     allArticle {
//       edges {
//         node {
//           id
//           thumnail
//           title
//         }
//       }
//     }
//   }
// `;