import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import styled from "styled-components"
import {  Button, Input, ErrorMessage, Form, SubIndex, PageCover } from '../components/common';
// import { FirebaseContext} from '../components/Firebase'
// import { Editor } from '@tinymce/tinymce-react';


const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`
const RadioContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const Radio = styled.input`
  display: block;
  height: 1rem;
  font-size: 14px;
  margin-right: 0.5rem;
`

const Contact = () => {
  return(
  <>
  <section>
    <PageCover>
      <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample5.jpg?alt=media&token=496b4690-25e6-44f2-b9e3-f56cdfb50050"></img>
      <p>
        <span>
          CONTACT
        </span>
      </p>
    </PageCover>
      <Form name="contact" method="post" action="/contact_success" data-netlify="true" data-netlify-honeypot="bot-field">
      <br></br>
      <p>下記フォームに必要事項をご記入の上、お問合せください。</p>
      <p>通常、４営業日以内にご返答いたします。メールアドレスの入力はお間違いのないようにご記入ください。</p>
      <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>NAME</SubIndex>            
        <Input required placeholder="Name"  type="text" name="name" />
        <SubIndex>TITLE</SubIndex>
        <Input required placeholder="Title"  type="text" name="subject"/>
        <SubIndex>EMAIL</SubIndex>
        <Input required placeholder="Email"  type="email" name="email"/>
        <SubIndex>INQUIRY</SubIndex>
        <TEXTAREA required placeholder="Inquiry" name="inquiry"  />
        <Button type="submit" block>Send</Button>
      </Form>
      <br/>
      <br/>
      <br></br>
  </section>
  </>
);
}

export default Contact
