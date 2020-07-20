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
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default RichText;