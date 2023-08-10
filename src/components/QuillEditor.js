import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill stili

const QuillEditor = () => {
  const [content, setContent] = useState('');

  console.log(content)

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default QuillEditor;
