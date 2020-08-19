import React, {useContext} from 'react';
import styled from "styled-components"
import renderHTML from 'react-render-html'
import { BottomBar } from '../components/common'
import {FirebaseContext} from '../components/Firebase';
import CreateIcon from '@material-ui/icons/Create';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from "react-share";

const ArticleTemplate = (props) => {
  const {user} = useContext(FirebaseContext);
  const ArticleItem = styled.section`
  border-bottom: 1px solid #f4f4f4
  `

  return (
    <section>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1.5rem 1.45rem`,
        }}
      >
        <ArticleItem>
          <h2>{props.pageContext.title}</h2>
          <p>{props.pageContext.date}</p>
          <img src={props.pageContext.thumnail} alt="CoverImage"></img>
          <p
            style={{
              marginBottom:`1.45em`
            }}
          >{renderHTML(props.pageContext.content)}</p>
        </ArticleItem>
        <div
          style={{
            marginTop:`1.45em`
          }}
        >
        </div>
        <BottomBar>
          <FacebookShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}
          style={{
            display: `flex`,
            alignItems: `center`
          }}
          >
            <FacebookIcon 
            size={ `2.3rem` } 
            round
            style={{
              marginRight:`1em`
            }} />
          </FacebookShareButton>
          <TwitterShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}
          style={{
            display: `flex`,
            alignItems: `center`
          }}
          >
            <TwitterIcon 
            size={ `2.3rem` } 
            round
            style={{
              marginRight:`1em`
            }} 
            />
          </TwitterShareButton>
          <LineShareButton 
          url={`https://infallible-rosalind-21f943.netlify.app/article/${props.pageContext.articleNum}`}
          style={{
            display: `flex`,
            alignItems: `center`
          }}
          >
            <LineIcon 
            size={ `2.3rem` } 
            round
            style={{
              marginRight:`1em`
            }} 
            />
          </LineShareButton>
          {/* {!!user &&  !!user.admin &&
          <CreateIcon 
            style={{
              color: `white`,
              backgroundColor: `#4c9c41`,
              borderRadius: `50%`,
              padding: `0.5rem`,
              height: `3rem`,
              width: `3rem`,
              margin: `0 0 0 auto`
            }}
          />
          }  */}
        </BottomBar>
      </div>
    </section>
  )
};

export default ArticleTemplate;