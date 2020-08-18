import React, { useContext, useState, useEffect } from "react"
import {  Articles, Button, SubTitle } from '../components/common';
import ArticleRoll from "../components/ArticleRoll"
import {FirebaseContext} from '../components/Firebase';


const Test = (props) => {
  const { firebase } = useContext(FirebaseContext);

  return(
  <>
  <section>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0.8rem 1.45rem`,
        }}
      >

    <SubTitle>
      <span>
         Recent Posts
      </span>
    </SubTitle>
    {!!firebase&&
      // <p>firebase</p>
      <Articles
      // firebase= {firebase}
      />

    }
    </div>
  </section>
  </>
);
}

export default Test
