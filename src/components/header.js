
import React, { useState, useContext } from "react"
import styled from "styled-components"
import {  ProfileImage } from '../components/common';
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

  @media (max-width: 768px) {
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
  width: 30px;
  height: 2px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {firebase, user} = useContext(FirebaseContext);
  console.log(user);

  return (
    <>
    <Navigation>
      <a href="/">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Flogo.jpg?alt=media&token=6a010728-d709-44b4-a1bf-d19217dbdd5c"
          style={{
            height:`40px`,
            marginBottom: `0`,
            display: `flex`,
            alignItems: `center`
          }}
          alt="image"
        ></img>
      </a>
        {!!user && !!user.photoURL && 
          <a href="/profile"
          style={{
            display: `flex`,
            alignItems: `center`
          }}
          >
            <ProfileImage
            src= {user.photoURL}
            >
            </ProfileImage>
          </a>
          }
        {!!user && !user.photoURL && 
        <a href="/profile"
        style={{
          display: `flex`,
          alignItems: `center`
        }}
        >
          <ProfileImage
          src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
          >
          </ProfileImage>
        </a>
        }
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
    </Navigation>
    </>
  )
}

export default Header