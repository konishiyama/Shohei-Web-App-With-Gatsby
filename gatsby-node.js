const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const ArticleTemplate = path.resolve('src/templates/ArticleTemplate.js');
  const PostTemplate = path.resolve('src/templates/PostTemplate.js');

  return graphql(`
  {
    allArticle {
      edges {
        node {
          id
          thumnail
          title
          date
          content
        }
      }
    }
    allMemberPost {
      edges {
        node {
          date
          content
          id
          title
          username
          postNum
          userPhoto
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
        path: `/article/${edge.node.articleNum}`,
        component: ArticleTemplate,
        context: edge.node
        //contextによって、作り出したページにpropsとしてedge.nodeのデータが渡されている。
      })
    });

    result.data.allMemberPost.edges.forEach(edge =>{
      createPage({
        path: `/member/${edge.node.postNum}`,
        component: PostTemplate,
        context: edge.node
      })
    });
  })
}
