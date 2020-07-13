import React, { useState, useContext } from "react"
// import {FirebaseContext} from '../components/Firebase'
import Layout from "../components/layout"
import {Link, navigate} from 'gatsby'
import { Form, Button, Input, FormContainer, Title, SmallP, ErrorMessage} from '../components/common';
import {useAuth, FirebaseContext} from '../components/Firebase'
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
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  
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
        password: formValues.password
      }).then(() => navigate('/')).catch(error => {
        setErrorMessage(error.message);
      })
  }else{
    setErrorMessage('Password and Confirm Password do not match');
  }
}

  return(
    <section>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>
          SIGN UP
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input onChange={handleInputChange} value={formValues.username} placeholder="username" type="text" required name="username" />
          <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email" />
          <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={6} name="password" />
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

export default Register