import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import {  Button, Input, Title, SmallP, ErrorMessage, CheckBox, Form} from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const A = styled.a`
  text-decoration: none;
  color: #0086d1;
  &:hover{
    color: #0086d1;
    cursor: pointer;
    text-decoration: underline;
  }
`

const Test = () => {
  const [titleValues, setTitleValues] = useState({ title:''});
  const [contentValues, setContentValues] = useState({ content: ''});
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    firebase.postArticle({title: titleValues.title, content: contentValues.content}).then(()=> navigate('/')).catch(error => {
      console.log(error);
      setErrorMessage(error.message);
    })
  }

  function handleInputTitleChange(e){
    // e.persist();
    setTitleValues( {
      title: e.target.value
    })
    console.log(titleValues);
  }

  function handleInputContentChange(e){
    // e.persist();
    setContentValues( {
      content: e
    })
    console.log(contentValues);
  }

  return(
    <section>
      <br></br>
      <br></br>
      <postFormContainer>
        <Title>
          Create Post
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input required placeholder="title"  type="text" onChange={handleInputTitleChange}  />
          <ReactQuill 
            required 
            value={contentValues.content}  
            onChange={handleInputContentChange} 
            modules = {Test.modules}
            formats = {Test.formats}
            name="content"
            />
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
        </postFormContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
)
}

Test.modules = {
  toolbar:[
    [{'header': '1'}, {'header': '2'}, {'font': []}],
    [{'size': [] }],
    ['bold','italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'},{'list': 'bullet'}],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

Test.formats = [
  'header', 
  'font',
  'size',
  'bold',
  'italic', 
  'underline', 
  'strike', 
  'blockquote',
  'list', 
  'link', 
  'image', 
  'video', 
  'code-block'
]

export default Test
