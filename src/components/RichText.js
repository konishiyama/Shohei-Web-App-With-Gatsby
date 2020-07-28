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
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
            'textcolor'
          ],
          toolbar:
            'undo redo | formatselect | forecolor backcolor | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default RichText;