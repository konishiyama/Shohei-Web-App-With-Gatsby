// const path = require('path');

// exports.createPages = ({graphql, actions}) => {
//   const {createPage} = actions;
//   const ArticleTemplate = path.resolve('src/templates/ArticleTemplate.js');
//   // const ArticleListPage = path.resolve(`./src/templates/ArticleListPage.js`);

//   return graphql(`
//     {
//       allArticle {
//         edges {
//           node {
//             id
//             thumnail
//             title
//           }
//         }
//       }
//     }
// `).then((result) => {
//     if(result.errors){
//       throw result.errors;
//       // Promise.reject(result.errors);
//     }
//     result.data.allArticle.edges.forEach(edge =>{
//       createPage({
//         path: `/article/${edge.node.id}`,
//         component: ArticleTemplate,
//         context: edge.node
//         //contextによって、作り出したページ(ArticleTemplate)にpropsとしてedge.nodeのデータが渡されている。
//       })
//     });
//   })


// //   const settings = graphql(
// //     `
// //     query {
// //       site {
// //         siteMetadata {
// //           title
// //           settings {
// //             postsPerOnePage
// //           }
// //         }
// //       }
// //       allArticle {
// //         edges {
// //           node {
// //             id
// //             thumnail
// //             title
// //           }
// //         }
// //       }
// //     }
// //   `
// //   ).then(result => {
// // 		if (result.errors) {
// // 			Promise.reject(result.errors);
// // 		}
// //   const posts =  result.data.allArticle.edges
// //   const numPosts = result.data.site.siteMetadata.settings.postsPerOnePage;
// //   const maxPage = Math.ceil(posts.length / numPosts);
// //   for (let i = 2; i < maxPage + 1; i++) {
// //     createPage({
// //       path: `articles${i}`,
// //       component: ArticleListPage,
// //       context: {
// //         index: i,
// //       }
// //     });
// //   }
// // })
  
//   // return Promise.all([articles, settings]);

// }
//上のコードは、記事一覧のページ遷移をcreatePageによってしようとしたものだが、うまくいかなかったのでとりあえず内容だけ残しておく。


const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const ArticleTemplate = path.resolve('src/templates/ArticleTemplate.js');

  return graphql(`
  {
    allArticle {
      edges {
        node {
          category
          content
          coverImage
          id
          thumnail
          title
          number
        }
      }
    }
  }
  
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allArticle.edges.forEach(edge =>{
      createPage({
        path: `/article/${edge.node.id}`,
        component: ArticleTemplate,
        context: edge.node
        //contextによって、作り出したページにpropsとしてedge.nodeのデータが渡されている。
      })
    });
  })
}
