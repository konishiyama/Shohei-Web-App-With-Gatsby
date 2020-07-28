import React, { Children } from "react"
import { PageCover } from '../components/common';



const About = (props) => {
  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample1.jpg?alt=media&token=bd5a45f3-b0ed-409b-a00b-f9760db145d7"></img>
      <p>
        <span>
          ABOUT
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
      </div>
  </section>
  </>
);
}


export default About
