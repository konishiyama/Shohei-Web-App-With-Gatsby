import React, { useContext } from "react"
import styled from "styled-components"
import {FirebaseContext} from './Firebase';
import {navigate} from 'gatsby'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { Container } from "react-bootstrap"


const Container = styled.div`
  background-color: #fff;
  padding: 1rem 0 1rem;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.2);
  a{
    color: #787c7b;
    text-decoration: none;
    &:hover{
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`

const LogIn = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  a{
    color: #787c7b;
    text-decoration: none;
    &:hover{
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const LogOut = styled.span`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  color: #787c7b;
    &:hover{
      color: #787c7b;
    }
  `

const ImgContainer = styled.div`
  height: 18px;
  width: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  alignItems: center;

`

const SNSLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 10px auto 1.5rem;
  display: flex;
`

const Paragraph2 = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`

const Line = styled.p`
  vertical-align: middle;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #787c7b;
  a{
    color: #787c7b;
    text-decoration: none;
    &:hover{
      color: #787c7b;
      transition: all 0.4s ease-in;
    }
  }
`

const CopyRight = styled.p`
  font-size: 8px;
  color: #808080;
  text-align: center;
  margin: 10px auto;
`


const Footer = () => {
  const {firebase, user} = useContext(FirebaseContext);
  
  function handleLogOutClick(){
    firebase.logout().then(() => navigate('/login'))
  }

  return (
  <>
    <Container>
      <Paragraph1>
        <Home>
          <a href="/">
            HOME
          </a>
        </Home>
          {!user &&
            <LogIn>
              <a href="/login">
                ログイン
              </a>
            </LogIn>
          }
          {!!user && 
            <LogOut onClick={handleLogOutClick}>ログアウト</LogOut>
          }
      </Paragraph1>

      <ImgContainer>
        <SNSLink
          href=""
          target="_blank"
        >
          <FacebookIcon
            alt="Facebook"
            style={{

            }}
          ></FacebookIcon>
        </SNSLink>
        <SNSLink>
          <YouTubeIcon></YouTubeIcon>
        </SNSLink>
        <SNSLink>
          <TwitterIcon></TwitterIcon>
        </SNSLink>
      </ImgContainer>

      <Paragraph2>
        <Line>
          <a 
          href="/contact"
          >
            お問い合わせ
          </a>
        </Line>
        {/* <Span></Span> */}
        <Line>
          <a 
          href="/privacy_policy"
          >
            プライバシーポリシー
          </a>
        </Line>
      </Paragraph2>

      <CopyRight>
        Copyright © 2020 Shohei Yamaguchi All Rights Reserved.
      </CopyRight>
    </Container>
   </>
  )
}

export default Footer