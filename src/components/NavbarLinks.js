
import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
const NavbarLinks = () => {
  const {firebase, user} = useContext(FirebaseContext);
  return (
    <>
      <NavItem to="https://shohei-web-app-demo.netlify.app/">About</NavItem>
      <NavItem to="https://shohei-web-app-demo.netlify.app/">Blog</NavItem>
      <NavItem to="https://shohei-web-app-demo.netlify.app/">Contact</NavItem>
      {!user &&
        <NavItem href="/login">Login</NavItem>
      }
    </>
  )
}

export default NavbarLinks