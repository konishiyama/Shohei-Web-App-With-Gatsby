import React, { useContext } from "react"
import { Container,  SubTitle, ProfileImage2 } from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';


const TD = styled.td`
  word-break : break-all;
`

const PhotoLink = styled.a`
  &:hover{
    opacity: 50%;
    cursor: pointer;
  }
`


const Profile = () => {

  const {firebase, user} = useContext(FirebaseContext);
  // const [PimageUrl, setPImageUrl] = useState('');
  console.log(firebase, user);

  return(
    <section>
      <Container>
        <SubTitle>
          <span>PROFILE</span>
        </SubTitle>
        {!!user && !!user.photoURL &&
          <PhotoLink href="/profile-edit">
            <ProfileImage2
            src= {user.photoURL}
            > 
            </ProfileImage2>
          </PhotoLink>
        }
        {!!user && !user.photoURL &&
          <a href="/profile-edit">
            <ProfileImage2
            src= "https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6"
            > 
            </ProfileImage2>
          </a>
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
            {!!user && !!user.username && 
              <TD>{user.username}</TD>}
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
      {/* <EditLink href="/profile-edit">EDIT</EditLink> */}
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
