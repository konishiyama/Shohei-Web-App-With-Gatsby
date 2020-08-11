import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import {  Button, Input, ErrorMessage, Form, SubIndex, PageCover } from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import { Editor } from '@tinymce/tinymce-react';


const MemberWrite = ({data}) => {
  const [titleValues, setTitleValues] = useState({ title:''});
  const [contentValues, setContentValues] = useState({ content: ''});
  const {firebase , user} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [timeStamp, setTimeStamp] = useState('');
  const [usernameValues, setUsernameValues] = useState('');
  const [PimageUrl, setPImageUrl] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    firebase.memberWrite({title: titleValues.title, content: contentValues.content, date:timeStamp, username: usernameValues, userPhoto: PimageUrl}).then(()=> navigate('/')).catch(error => {
      setErrorMessage(error.message);
    })
  }

  function handleInputTitleChange(e){
    setErrorMessage('');
    setTitleValues( {
      title: e.target.value
    })
    setTimeStamp(new Date().toLocaleDateString());
    setUsernameValues(user.username);
    setPImageUrl(user.photoURL);
  }

  function handleEditorChange(e){
    setContentValues( {
          content: e.target.getContent()
        })
    setTimeStamp(new Date().toLocaleDateString());
    setUsernameValues(user.username);
    setPImageUrl(user.photoURL);
  }

  return(
    <section>
      <PageCover>
        <img src="https://firebasestorage.googleapis.com/v0/b/shohei-s-webapp-with-gatsby.appspot.com/o/site_default_images%2Fcover-photo2.jpg?alt=media&token=2e15a9eb-c440-484d-8029-96daabdab65f" alt="image"></img>
        <p>
          <span>
            WRITE
          </span>
        </p>
      </PageCover>
      <Form onSubmit={handleSubmit}>
        <SubIndex>TITLE</SubIndex>            
        <Input required placeholder="title"  type="text" onChange={handleInputTitleChange}  />
        <br></br>
        <SubIndex>CONTENT</SubIndex>
        <div className="App">
        <Editor
          init={{
            height: 500,
            menubar: true,
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
        <ErrorMessage>Failed posting</ErrorMessage>
        }
        <br></br>
        <Button type="submit" block>Write</Button>
      </Form>
      <br/>
      <br/>
      <br></br>
    </section>
)
}

// export const query = graphql`
// {
//   allArticle {
//     edges {
//       node {
//         id
//         thumnail
//         title
//         date
//         content
//       }
//     }
//   }
//   allMemberPost {
//     edges {
//       node {
//         date
//         content
//         id
//         title
//         username
//       }
//     }
//   }
// }
// `

export default MemberWrite
