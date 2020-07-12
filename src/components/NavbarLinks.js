
import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import {FirebaseContext} from './Firebase';

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0086d1;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #0086d1;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const Logout = styled.span`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  cursor: pointer;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0086d1;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #0086d1;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  const {firebase, user} = useContext(FirebaseContext);

  function handleLogOutClick(){
    console.log('it works!!!');
    firebase.logout().then(() => navigate('/login'))
  }

  return (
    <>
      <NavItem to="/">About</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/">Contact</NavItem>
      {!user &&
        <NavItem href="/login">Login</NavItem>
      }
      {!!user &&
        <Logout onClick={handleLogOutClick}>Logout</Logout>
      }
    </>
  )
}

export default NavbarLinks