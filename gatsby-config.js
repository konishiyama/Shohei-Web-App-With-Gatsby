module.exports = {
  siteMetadata: {
    title: `衆議院議員 山口翔平 公式ウェブサイト`,
    description: `栃木県日光市選出、衆議院議員、山口翔平の公式ウェブサイトです。`,
    author: `@ShoheiYamaguchi`,
    settings: {
      postsPerOnePage: 4,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Article',  //ここの名前はただのqueryの名称になるのでなんでもいい。
            collection: 'articles', //これはFirebaseのコレクション名と同一にする必要がある（というかこれで指定する）
            map: doc => ({
              title: doc.title,
              content: doc.content,
              coverImage: doc.coverImage,
              thumnail: doc.thumnail,
              // time: doc.time,
              category: doc.category,
              body: doc.body,
            })
          },
        ]
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
