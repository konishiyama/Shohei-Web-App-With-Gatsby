import React from "react"
import { PageCover } from '../components/common';



const About = (props) => {
  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample4.jpg?alt=media&token=05feeaeb-7485-4dc6-a470-6be86d173842"
      alt="coverImg"
      ></img>
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
