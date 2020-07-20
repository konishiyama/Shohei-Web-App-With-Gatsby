import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import {  Button, Input, ErrorMessage, Form, Message, UploadButton, PageTitle, SubIndex, PageCover } from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';



const Post = () => {
  const [titleValues, setTitleValues] = useState({ title:''});
  const [contentValues, setContentValues] = useState({ content: ''});
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileErrorMessage, setFileErrorMessage] = useState('');
  const [fileUploaded, setFileUploaded] = useState('');
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    firebase.postArticle({title: titleValues.title, content: contentValues.content, cover: imageUrl}).then(()=> navigate('/')).catch(error => {
      console.log(error);
      setErrorMessage(error.message);
    })
  }

  function handleInputTitleChange(e){
    // e.persist();
    setErrorMessage('');
    setTitleValues( {
      title: e.target.value
    })
    console.log(titleValues);
  }

  function handleInputContentChange(e){
    // e.persist();
    setErrorMessage('');
    setContentValues( {
      content: e
    })
    console.log(contentValues);
  }

  function onSubmitFile(e){
    e.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    firebase.storage.ref(`/images/${image.name}`).put(image).then(
      complete,
      setFileErrorMessage(''),
      setFileUploaded('File Uploaded')
    )
    .catch(error => {
      setFileErrorMessage(error.message);
    })
  }

  function complete(){
    firebase.storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl);
      });
  };

  function handleImage(e){
    const image = e.target.files[0];
    setImage(image);
  };

  return(
    <section>
      <PageCover>
        <img src="/img/coversample1.jpg"></img>
        <p>
          <span>
            POST ARTICLE
          </span>
        </p>
      </PageCover>
      <Form onSubmit={handleSubmit}>
        <SubIndex>COVER IMAGE</SubIndex>
          <form  required onSubmit={onSubmitFile}>
            <input type="file" onChange={handleImage}  />
            <UploadButton>Upload</UploadButton>
          </form>
          {!!fileUploaded &&
          <Message>Uploaded image properly!</Message>
          }
          {!!fileErrorMessage &&
          <ErrorMessage>You need to uploaded image!</ErrorMessage>
          }
        <SubIndex>TITLE</SubIndex>            
        <Input required placeholder="title"  type="text" onChange={handleInputTitleChange}  />
        <SubIndex>CONTENT</SubIndex>
        <ReactQuill 
          required 
          value={contentValues.content}  
          onChange={handleInputContentChange} 
          modules = {Post.modules}
          formats = {Post.formats}
          name="content"
          />
        <br></br>
        {!!errorMessage &&
        <ErrorMessage>Failed posting article properly</ErrorMessage>
        }
        <br></br>
        <Button type="submit" block>Post</Button>
      </Form>
      <br/>
      <br/>
      <br></br>
      <br></br>
      <br></br>
    </section>
)
}

Post.modules = {
  toolbar:[
    [{'header': '1'}, {'header': '2'}, {'font': []}],
    [{'size': [] }],
    ['bold','italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'},{'list': 'bullet'}],
    ['link',
    //  'image', 'video'
    ],
    ['clean'],
    ['code-block']
  ]
};

Post.formats = [
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
  // 'image', 
  // 'video', 
  'code-block'
]

export default Post
