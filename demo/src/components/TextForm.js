import React, { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    console.log("OnChange Clicked");
    setText(event.target.value);
  }

  const handlelowerClick = (event)=>{
    console.log("handlelower Clicked");
    let ntext= text.toLowerCase();
    setText(ntext);
  }

  const handleUpClick = () => {
    console.log("handleUpClick Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleClearClick = (event)=>{
    console.log("handlelower Clicked");
    let ntext= '';
    setText(ntext);
  }
  



  const [text, setText] = useState(" ");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPER case</button> &nbsp;&nbsp;&nbsp;&nbsp;

      <button className="btn btn-primary" onClick={handlelowerClick}>Convert to Lower case</button> &nbsp;&nbsp;&nbsp;&nbsp;


      <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button> 

      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length}  words and {text.length} length</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>

    </>
  )
}
