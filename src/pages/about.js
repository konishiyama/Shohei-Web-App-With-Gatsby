import React, { Children } from "react"
import {  Button, Input, ErrorMessage, Form, Message, UploadButton, PageTitle, SubIndex, PageCover } from '../components/common';



const About = (props) => {
  return(
  <>
  <section>
    <PageCover>
      <img src="/img/coversample2.png"></img>
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
