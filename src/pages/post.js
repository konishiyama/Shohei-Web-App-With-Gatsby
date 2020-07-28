import React, { useState, useContext, useEffect } from "react"
import { navigate } from 'gatsby'
import {  Button, Input, ErrorMessage, Form, Message, UploadButton, SubIndex, PageCover } from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import { Editor } from '@tinymce/tinymce-react';


const Post = ({data}) => {
  const [titleValues, setTitleValues] = useState({ title:''});
  const [contentValues, setContentValues] = useState({ content: ''});
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileErrorMessage, setFileErrorMessage] = useState('');
  const [fileUploaded, setFileUploaded] = useState('');
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const allArticles = data.allArticle.edges;
  const [articleNumber, setArticleNumber] = useState('');

  useEffect(()=>{
    setArticleNumber(allArticles.length);
    console.log(articleNumber);
  })

  function handleSubmit(e){
    e.preventDefault();
    firebase.postArticle({title: titleValues.title, content: contentValues.content, cover: imageUrl, number: articleNumber}).then(()=> navigate('/')).catch(error => {
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

  function handleEditorChange(e){
    setContentValues( {
          content: e.target.getContent()
        })
    console.log(contentValues);
  }

  function onSubmitFile(e){
    e.preventDefault();
    if (image === "") {
      setFileErrorMessage('Error File Uploading!');
    }
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
        <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcoversample1.jpg?alt=media&token=bd5a45f3-b0ed-409b-a00b-f9760db145d7" alt="image"></img>
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
        <div className="App">
        <Editor
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
          apiKey="n5flvaer5akndukhxw941fwbvz69k09cq48w1bhe57jq4s65"
          onChange={handleEditorChange}
          required 
        />
        </div>
        {!!errorMessage &&
        <ErrorMessage>Failed posting article properly</ErrorMessage>
        }
        <Button type="submit" block>Post</Button>
      </Form>
      <br/>
      <br/>
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
          number
        }
      }
    }
  }
`

export default Post
