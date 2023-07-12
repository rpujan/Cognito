import React, { useState } from 'react';
import ContentEditable from "react-contenteditable";
import { getTextWidth } from 'get-text-width';

const Reader = () => {

  const [ html, setHtml ] = useState("Paste content here..");

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };
  const plainText = html.replace(/<[^>]+>/g, '');
  console.log(plainText.length);

  const handleStartClick = () => {
    // console.log('button clicked!')
    // let textLength = plainText.length;
    let textArray = plainText.split(" ");
    for(let i = 0; i < textArray.length; i++) {
      setHtml(prevState => {
        return {
          setHtml: `<b>${textArray[i]}</b>!`,
          ...prevState
        }        
      });
    }
  }
  return (
    <div className="container">
      <button onClick={handleStartClick}>Start</button>
      <ContentEditable
        html={html}
        disabled={false}
        onChange={handleChange}
      />
    </div>
  )
};

export default Reader;
