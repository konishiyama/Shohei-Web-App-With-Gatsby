import React, { useState } from "react"
import Layout from "../components/layout"
import {Link, navigate} from 'gatsby'
import { Form, Button, Input} from '../components/common';
import {useAuth} from '../components/Firebase'


const Login = () => {
  const [formValues, setFormValues] = useState({email:'', password: ''});
  const {firebase} = useAuth();

  function handleSubmit(e){
    e.preventDefault();
    firebase.login({email: formValues.email, password: formValues.password}).then(()=> navigate('/'))
  }

  function handleInputChange(e){
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }


  return(
    <Layout>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="email" value={formValues.email} name="email" type="email" onChange={handleInputChange} />
          <Input placeholder="password" value={formValues.password} name="password" type="password" onChange={handleInputChange} />
          <Button type="submit" block>Login</Button>
        </Form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
)
}

export default Login
