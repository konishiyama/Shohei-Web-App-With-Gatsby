import React, { useState, useContext } from "react"
import styled from "styled-components"
import {FirebaseContext} from './Firebase';
import {Link, navigate} from 'gatsby'
// import { Container } from "react-bootstrap"


const Container = styled.div`
  background-color: #363636;
  padding: 1rem 0 1rem;
  a{
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #fff;
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
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #fff;
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
  color: #fff;
    &:hover{
      color: #fff;
    }
  `

const ImgContainer = styled.div`
  height: 18px;
  width: 80%;
  margin: 0 auto 1.5rem;
  display: flex;
  alignItems: center;

`

const Img = styled.img`
  height: 18px;
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
  color: #fff;
  a{
    color: #fff;
    text-decoration: none;
    &:hover{
      color: #fff;
      transition: all 0.4s ease-in;
    }
  }
`
const Span = styled.span`
  margin: 0 10px;
  
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
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ffacebook.svg?alt=media&token=01a3eb41-7aa7-4cc8-ba54-798f088b54d6" href="" target="_blank" alt="Facebook"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fyoutube.svg?alt=media&token=af3a8aa1-c3d1-4e81-817f-db214d79c2ec" href="" target="_blank" alt="Instagram"></Img>
        <Img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Ftwitter.svg?alt=media&token=b173455e-d10e-4c38-8a44-952e43d6067a" href="" target="_blank" alt="Twitter"></Img>
      </ImgContainer>

      <Paragraph2>
        <Line>
          <a 
          href=""
          >
            このサイトについて
          </a>
        </Line>
        <Span></Span>
        <Line>
          <a 
          href=""
          >
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