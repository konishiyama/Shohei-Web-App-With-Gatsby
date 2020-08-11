import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class RichText extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      e.target.getContent()
    );
  }

  render() {
    return (
      <Editor
        init={{
          height: 500,
          menubar: true,
          language: "ja",
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'textcolor'
          ],
          color_cols: "5",
          toolbar:
            'undo redo | formatselect | forecolor backcolor | bold italic underline | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default RichText;