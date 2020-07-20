import React, { useState, useContext } from "react"
import { FirebaseContext} from '../components/Firebase'

function App() {
  const {firebase} = useContext(FirebaseContext);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleImage = event => {
    const image = event.target.files[0];
    setImage(image);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (image === "") {
      console.log("ファイルが選択されていません");
    }
    // アップロード処理
    firebase.storage.ref(`/images/${image.name}`).put(image).then(
      complete
    );
  };

  const complete = () => {
    // 完了後の処理
    // 画像表示のため、アップロードした画像のURLを取得
    firebase.storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl);
      });
  };

  return (
    <div className="App">
      <h1>画像アップロード</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button>Upload</button>
      </form>
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
}

export default App;