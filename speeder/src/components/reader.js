import React, { useState } from 'react';
import ContentEditable from "react-contenteditable";

const Reader = () => {

  const [ html, setHtml ] = useState("Edit <b>me</b>!");

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  return (
    <ContentEditable
      html={html}
      disabled={false}
      onChange={handleChange}
    />
  )
};

export default Reader;
