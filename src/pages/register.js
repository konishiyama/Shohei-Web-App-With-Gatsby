import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import { Form, Button, Input, FormContainer, Title, SmallP, ErrorMessage, SubIndex, Message, UploadButton} from '../components/common';
// import { FirebaseContext} from '../components/Firebase'
import {useAuth} from '../components/Firebase'
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

const Register = () => {
  const {firebase} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  // const [PfileErrorMessage, setPFileErrorMessage] = useState('');
  // const [PfileUploaded, setPFileUploaded] = useState('');
  // const [Pimage, setPImage] = useState("");
  // const [PimageUrl, setPImageUrl] = useState("");
  
  function handleInputChange(e){
    e.persist();
    setErrorMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();

    if(formValues.password === formValues.confirmPassword){
      firebase.register({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        // photoURL: PimageUrl
      }).then(() => navigate('/')).catch(error => {
        setErrorMessage(error.message);
      })
  }else{
    setErrorMessage('Password and Confirm Password do not match');
  }
}

// function onSubmitPFile(e){
//   e.preventDefault();
//   if (Pimage === "") {
//     setPFileErrorMessage('Error File Uploading!');
//   }
//   firebase.storage.ref(`/profileImages/${Pimage.name}`).put(Pimage).then(
//     Complete,
//     setPFileErrorMessage(''),
//     setPFileUploaded('File Uploaded')
//   )
//   .catch(error => {
//     setPFileErrorMessage(error.message);
//   })
// }

// function Complete(){
//   firebase.storage
//     .ref("profileImages")
//     .child(Pimage.name)
//     .getDownloadURL()
//     .then(fireBaseUrl => {
//       setPImageUrl(fireBaseUrl);
//     });
// };

// function handlePImage(e){
//   const Pimage = e.target.files[0];
//   setPImage(Pimage);
// };

  return(
    <section>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>
          SIGN UP
        </Title>
        {/* <Form  required onSubmit={onSubmitPFile}>
          <SubIndex>PROFILE IMAGE</SubIndex>
            <input type="file" onChange={handlePImage}  />
            <UploadButton>Upload</UploadButton>
              {!!PfileUploaded &&
              <Message>Uploaded image properly!</Message>
                }
              {!!PfileErrorMessage &&
              <ErrorMessage>You need to uploaded image!</ErrorMessage>
              }
        </Form> */}
        <br></br>
        <Form onSubmit={handleSubmit}>
          <SubIndex>USERNAME</SubIndex>
          <Input onChange={handleInputChange} value={formValues.username} placeholder="username" type="text" required name="username" />
          <SubIndex>EMAIL</SubIndex>
          <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email" />
          <SubIndex>PASSWORD</SubIndex>
          <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={6} name="password" />
          <SubIndex>CONFIRM PASSWORD</SubIndex>
          <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword" />
          {!!errorMessage &&
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
          }
          <Button type="submit" block>
            Register
          </Button>
        </Form>
        <br></br>
        <SmallP>
          <p>Read
           <A to="/"> Terms and Conditions</A>
          </p>
        </SmallP>
        <SmallP>
         <p>Already a member?
          <A to="/"> Login</A>
         </p>
        </SmallP>
        <br/>
      </FormContainer>
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


export default Register
