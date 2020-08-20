import React, { useContext } from "react"
import {  IndexArticles, Articles, Button, SubTitle } from '../components/common';
import styled, { ThemeConsumer } from "styled-components"
import {FirebaseContext} from '../components/Firebase';

const Test = (props) => {
  const { user, firebase } = useContext(FirebaseContext);

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
      {!!firebase &&  
        <IndexArticles
            firebase= {firebase}
          />
        }
    </div>
  </section>
  </>
);
}

export default Test
