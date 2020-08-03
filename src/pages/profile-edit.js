import React, { useState, useContext, useEffect } from "react"
import { navigate } from 'gatsby'
import { Form, Button, Input, FormContainer, Title, SmallP, ErrorMessage, SubIndex, Message, UploadButton, ProfileImage} from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';


const A = styled.a`
  text-decoration: none;
  color: #0086d1;
  &:hover{
    color: #0086d1;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Profile = () => {
  // useEffect(() => {
  //   const defaultPic = user.photoURL
  //   if(defaultPic){
  //     return setPImageUrl(defaultPic)
  //   }else{
  //     return setPImageUrl("https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2FuserDefaultPic.png?alt=media&token=2e1c678f-910a-4332-a6c5-6d3161aa16e6")

  //   }
  // } );

  const {firebase, user} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const [formValues, setFormValues] = useState({
    username: ''
  });

  const [PfileErrorMessage, setPFileErrorMessage] = useState('');
  const [PfileUploaded, setPFileUploaded] = useState('');
  const [Pimage, setPImage] = useState("");
  const [PimageUrl, setPImageUrl] = useState('');

  function handleInputChange(e){
    e.persist();
    setErrorMessage('');
    setPFileUploaded('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }
  
  function handleSubmit(e){
    e.preventDefault();
    firebase.editProfile({
      username: formValues.username,
      photoURL: PimageUrl,
      email: user.email,
      userId: user.uid,
    }).then(() => navigate('/profile')).catch(error => {
      setErrorMessage(error.message);
    })
}

function onSubmitPFile(e){
  e.preventDefault();
  if (Pimage === "") {
    setPFileErrorMessage('Error File Uploading!');
  }
  firebase.storage.ref(`/profileImages/${Pimage.name}`).put(Pimage).then(
    Complete,
    setPFileErrorMessage(''),
    setPFileUploaded('File Uploaded')
  )
  .catch(error => {
    setPFileErrorMessage(error.message);
  })
}

function Complete(){
  firebase.storage
    .ref("profileImages")
    .child(Pimage.name)
    .getDownloadURL()
    .then(fireBaseUrl => {
      setPImageUrl(fireBaseUrl);
    });
};

function handlePImage(e){
  const Pimage = e.target.files[0];
  setPImage(Pimage);
};

  return(
    <section>
      <br></br>
      <br></br>
      {!!user && 
      <FormContainer>
        <Title>
          EDIT PROFILE
        </Title>
        {!!PimageUrl && 
             <img
             src= {PimageUrl}
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
 
        <Form  onSubmit={onSubmitPFile}>
          <SubIndex>PROFILE IMAGE</SubIndex>
            <input 
              type="file" 
              onChange={handlePImage} 
              required
              style = {{
                marginBottom: `1vw`,
              }}
              />
            <UploadButton>Upload</UploadButton>
              {!!PfileUploaded &&
              <Message>Uploaded image properly!</Message>
                }
              {!!PfileErrorMessage &&
              <ErrorMessage>You need to uploaded image!</ErrorMessage>
              }
        </Form>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <SubIndex>USERNAME</SubIndex>
          <Input onChange={handleInputChange} value={formValues.username} placeholder={user.displayName} type="text" required name="username" />
          <Button type="submit" block>
            EDIT
          </Button>
        </Form>
        <br></br>
        <br/>
      </FormContainer>
    }
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
