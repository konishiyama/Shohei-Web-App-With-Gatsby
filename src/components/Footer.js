import React, { useState, useContext } from "react"
import styled from "styled-components"
import {FirebaseContext} from './Firebase';
import {Link, navigate} from 'gatsby'
// import { Container } from "react-bootstrap"


const Container = styled.div`

`

const Home = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
  // font-weight: bold;
  a{
    text-decoration: none;
    &:hover{
      color: #0086d1;
      transition: all 0.4s ease-in;
    }
  }
`

const LogIn = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  a{
    text-decoration: none;
    &:hover{
      color: #0086d1;
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
    &:hover{
      color: #0086d1;
    }
  `

const ImgContainer = styled.div`
  height: 40px;
  width: 80%;
  margin: 0 auto 10px;
  display: flex;

`

const Img = styled.img`
  height: 30px;
  margin: 0 auto;

`

const Paragraph1 = styled.div`
  width: 60%;
  margin: 0 auto 15px;
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
  color: #404040;
`
const Span = styled.span`
  margin: 0 10px;
`

const CopyRight = styled.p`
  font-size: 8px;
  color: #404040;
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
            {/* <img src="/icons/Home1.png"></img> */}
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
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FTwitter_Logo_Blue.png?alt=media&token=028253c0-ebfe-4f04-9cee-64efba8a187f" href="" target="_blank" alt="Twitter"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ff_logo_RGB-Blue_58.png?alt=media&token=fb458aff-398e-43fc-9cfd-96d239cad140" href="" target="_blank" alt="Facebook"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FInstagram.png?alt=media&token=d2d96f0e-b7c3-42d7-a11e-d1373577f8c2" href="" target="_blank" alt="Instagram"></Img>
      </ImgContainer>

      <Paragraph2>
        <Line>
          <a 
          href=""
          style={{
            textDecoration: `none`,
            color: `#404040`,
          }}>
            このサイトについて
          </a>
        </Line>
        <Span></Span>
        <Line>
          <a 
          href=""
          style={{
            textDecoration: `none`,
            color: `#404040`,
          }}>
            個人情報保護方針
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