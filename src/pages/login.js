import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import { Form, Button, Input, FormContainer, Title, SmallP, ErrorMessage, CheckBox, SubIndex } from '../components/common';
import { FirebaseContext } from '../components/Firebase'
import styled from 'styled-components';


const A = styled.a`
  text-decoration: none;
  color: #4c9c41;
  &:hover{
    color: #4c9c41;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Login = () => {
  const [formValues, setFormValues] = useState({email:'', password: ''});
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    firebase.login({email: formValues.email, password: formValues.password}).then(()=> navigate('/')).catch(error => {
      console.log(error);
      setErrorMessage(error.message);
    })
  }
  //login()はプロミスなので（async）thenを使っている。

  function handleInputChange(e){
    e.persist();
    setErrorMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }

  return(
    <section>
      <br></br>
      <br></br>
      <FormContainer>
        <Title>
          LOGIN
        </Title>
        <Form onSubmit={handleSubmit}>
          <SubIndex>EMAIL</SubIndex>
          <Input required placeholder="email" value={formValues.email} name="email" type="email" onChange={handleInputChange} />
          <SubIndex>PASSWORD</SubIndex>
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
    </section>
)
}

export default Login
