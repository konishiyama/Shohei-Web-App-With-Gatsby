import React, { useState, useContext, useEffect } from "react"
import { navigate } from 'gatsby'
import {  Container, Title, SubTitle } from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';


const TD = styled.td`
  word-break : break-all;
`

const EditLink = styled.a`
  padding: 6px 10px;
  background: #0086d1;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
  text-decoration: none;

  &:hover{
    opacity: 80%;
    cursor: pointer;
  }
`


const Profile = () => {

  const {firebase, user} = useContext(FirebaseContext);
  const [PimageUrl, setPImageUrl] = useState('');
  console.log(user);

  return(
    <section>
      <Container>
        <SubTitle>
          <span>PROFILE</span>
        </SubTitle>
        {!!user && 
          <img
          src= {user.photoURL}
          style={{
            height: `8rem`,
            width: `8rem`,
            objectFit: `cover`,
            borderRadius: `50%`,
            margin: `0 auto 1rem`
          }}
          > 
          </img>
        }
        {!user && 
          <img
          src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
          style={{
            height: `8rem`,
            width: `8rem`,
            objectFit: `cover`,
            borderRadius: `50%`,
            margin: `0 auto 1rem`
          }}
          > 
          </img>
          }
      <br></br>
      <br></br>
      <table>
        <tbody>
          <tr>
            <TD>
              <b>EMAIL</b>
            </TD>
            {!!user && !!user.email && 
              <TD>{user.email}</TD>}
          </tr>
          <tr>
            <TD>
              <b>USERNAME</b>
            </TD>
            {!!user && !!user.displayName && 
              <TD>{user.displayName}</TD>}
          </tr>
          <tr>
            <TD>
              <b>ID</b>
            </TD>
            {!!user && !!user.uid && 
              <TD>{user.uid}</TD>}
          </tr>
        </tbody>
      </table>
      <br></br>
      <EditLink href="/profile-edit">EDIT</EditLink>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Container>
    </section>
)
}


export const query = graphql`
  {
    allArticle {
      edges {
        node {
          id
          thumnail
          title
          date
        }
      }
    }
  }
`


export default Profile
