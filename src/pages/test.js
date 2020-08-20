import React, { useContext, Component } from "react"
import {  IndexArticles, IndexMemberPosts, Articles, Button, SubTitle } from '../components/common';
import styled, { ThemeConsumer } from "styled-components"
import Slider from "react-slick";
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
      <br></br>
      <br></br>
      <br></br>
      </div>
      {!!firebase &&  
        <IndexArticles
            firebase= {firebase}
          />
        }
      {!!firebase &&  
        <IndexMemberPosts
            firebase= {firebase}
          />
        }
  </section>
  </>
);
}

export default Test
