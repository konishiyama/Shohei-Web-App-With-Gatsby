const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const ArticleTemplate = path.resolve('src/templates/ArticleTemplate.js') 

  return graphql(`
  {
    allTest {
      edges {
        node {
          name
          title
          id
        }
      }
    }
  }
  
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allTest.edges.forEach(edge =>{
      createPage({
        path: `/article/${edge.node.id}`,
        component: ArticleTemplate,
        context: edge.node
        //contextによって、作り出したページにpropsとしてedge.nodeのデータが渡されている。
      })
    });
  })
}