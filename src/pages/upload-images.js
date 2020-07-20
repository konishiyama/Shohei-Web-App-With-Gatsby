import React, { useState, useContext } from "react"
import { navigate } from 'gatsby'
import {  Button, Input, Title,  ErrorMessage, Form} from '../components/common';
import { FirebaseContext} from '../components/Firebase'
import styled from 'styled-components';



const Upload = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const {firebase} = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  function handleImage(e){
    const image = e.target.files[0];
    setImage(image);
  };

  function onSubmit(e) {
    e.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    firebase.uploadImages({image:image}).then((image) => {
      firebase.getImageURL({image: image}).then(url => {
        setImageUrl(url);
      })
    })
    console.log(imageUrl);
  };


  return (
    <div className="App">
      <h1>画像アップロード</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
         {!!errorMessage &&
          <ErrorMessage>Failed posting image properly</ErrorMessage>
          }
          {/* <img src={imageUrl} alt="uploaded" /> */}
        <button>Upload</button>
      </form>
    </div>
  );
}
export default Upload;