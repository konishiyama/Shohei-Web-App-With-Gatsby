import React, { useState } from "react"
import Layout from "../components/layout"
import {Link, navigate} from 'gatsby'
import { Form, Button, Input, FormContainer, Title, Facebook, FBContainer, SmallP, ErrorMessage, CheckBox} from '../components/common';
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

const Login = () => {
  const [formValues, setFormValues] = useState({email:'', password: ''});
  const {firebase} = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    firebase.login({email: formValues.email, password: formValues.password}).then(()=> navigate('/')).catch(error => {
      console.log(error);
      setErrorMessage(error.message);
    })
  }

  function handleInputChange(e){
    e.persist();
    setErrorMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }

  return(
    <Layout>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>
          LOGIN
        </Title>
        <Form onSubmit={handleSubmit}>
          <p style={{
            textAlign: `left`,
            fontSize: `16px`,
            marginBottom: `4px`,
          }}>EMAIL</p>
          <Input required placeholder="email" value={formValues.email} name="email" type="email" onChange={handleInputChange} />
          <p style={{
            textAlign: `left`,
            fontSize: `16px`,
            marginBottom: `4px`,
          }}>PASSWORD</p>
          <Input required placeholder="password" value={formValues.password} name="password" type="password" onChange={handleInputChange} />
          {!!errorMessage &&
          <ErrorMessage>パスワードまたはメールアドレスが間違っています</ErrorMessage>
          }
          <div style={{
            display: `flex`,
            marginBottom: `20px`,
            marginTop: `20px`,
          }}>
            <CheckBox type="checkbox" />
            <span style={{
              paddingLeft: `4px`
            }}>Remember Password</span>
          </div>
          <Button type="submit" block>Login</Button>
        </Form>
        {/* <div 
        style={{
          margin: `1rem auto 0.5rem`,
          fontSize: `16px`,
        }}>
          or log in with 
        </div> */}
        {/* <Facebook>
          <FBContainer>
            <span style={{
              fontFamily: `Lucida Grande`,
              fontWeight: `bold`,
              fontSize: `14px`,
              // color: `#1877F2`,
              paddingLeft: `5px`,
            }}>Facebook</span>
          </FBContainer>
        </Facebook> */}
        <br/>
        <SmallP>
          <p>Forgot
           <A href="/"> Password?</A>
          </p>
        </SmallP>
        <SmallP>
         <p>Not a member?
          <A href="/register"> Sign up now</A>
         </p>
        </SmallP>
        <br/>
      </FormContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
)
}

export default Login
