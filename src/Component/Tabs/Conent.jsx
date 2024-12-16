import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Content({ formData, setFormData }) {
  const [value, setValue] = useState('');
  const quillStyle = {
    height: '300px', 
  };

  useEffect(() => {
    // Restore content when component mounts
    setValue(formData);
  }, [formData]);

  const handleChange = (html_content, _, __, editor) => {
    setValue(html_content);
    // Update parent component's state with the Quill data
    setFormData(html_content);
  };

  return (
    <>
      <div>
        <ReactQuill theme="snow" style={quillStyle} value={value} onChange={handleChange} />
      </div>
      <br /> <br />
    </>
  );
}
