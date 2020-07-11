import React, { Children } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const IndexPage = (props) => {
  console.log(props);
  return(
  <Layout>
      <div>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3>testtest</h3>
        <br></br>
        <h3 className="has-text-weight-semibold is-size-2">
        Twitter
        </h3>
        <br>
        </br>
        <a class="twitter-timeline" data-lang="ja" data-width="360" data-height="410" data-theme="light" href="https://twitter.com/GekidanHitori?ref_src=twsrc%5Etfw" 
        style={{
          textDecoration: `none`
        }} target="_blank">Tweets by GekidanHitori</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <br>
        </br>
        <br>
        </br>
        <h3 className="has-text-weight-semibold is-size-2">
          Instagram
        </h3>
        <br>
        </br>
        <a 
        href="https://www.instagram.com/dlwlrma/?hl=ja"
        target= "_blank"
        >
          <img src="/img/Instagram-thumnail.png"></img>
        </a>
        <p>
          <a 
            href="https://www.instagram.com/dlwlrma/?hl=ja"
            target= "_blank"
            style={{
              textDecoration: `none`
            }}
            >もっと見る
          </a>
        </p>
      </div>
  </Layout>
);
}

export const query = graphql`
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

`

export default IndexPage
