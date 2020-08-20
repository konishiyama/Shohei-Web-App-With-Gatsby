
import React, { useState, useContext } from "react"
import styled from "styled-components"
import {  ProfileImage, LoginImage } from '../components/common';
import NavbarLinks from "./NavbarLinks"
import {FirebaseContext} from './Firebase';

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  @media (max-width: 1024px) {
    position: sticky;
    height: 6.5vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 6.5vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 25px;
  height: 1.5px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 25px;
    height: 1.5px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-9px, 0px)" : "rotate(0deg)"};
    top: -8px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 8px;
  }
`
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {user} = useContext(FirebaseContext);

  return (
    <>
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
          />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}

      {/* <a href="/"
         style={{
          margin:`0 30px 0 0`,
        }}
      >
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fsample_logo.jpg?alt=media&token=65f254d8-cf14-49c8-89eb-e457519fea94"
          style={{
            height:`8vw`,
            marginBottom: `0`,
            display: `flex`,
            alignItems: `center`
          }}
          alt="logoImg"
        ></img>
      </a> */}

      {!!user && 
      <div>
        <a href="/profile"
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
        >
        <ProfileImage
        src= {user.photoURL}
        >
        </ProfileImage>
        </a>
      </div>
      }
      {!!user && !user.photoURL && 
      <div>
        <a href="/profile"
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
        >
          <ProfileImage
          src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
          >
          </ProfileImage>
        </a>
      </div>
      }
      {!user && 
      <div>
        <a href="/login"
        style={{
          display: `flex`,
          alignItems: `center`,
        }}
        >
          <LoginImage
          src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fsign-in-alt-solid.svg?alt=media&token=8de85d0f-7cba-4ce5-a246-44a839597ea0"
          >
          </LoginImage>
        </a>
      </div>
      }
    </Navigation>
    </>
  )
}

export default Header