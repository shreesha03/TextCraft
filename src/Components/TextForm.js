import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  const [text, setText] = useState("Enter text here!");

  const handleupclick=()=>{
    // console.log("Uppercase button was clicked!")
    let uppercasetext = text.toUpperCase();
    setText(uppercasetext);
    props.showAlert("Text converted to UPPERCASE", "success");
  }

  const handleloclick=()=>{
    // console.log("Lowercase button was clicked!")
    let lowercasetext = text.toLowerCase();
    setText(lowercasetext);
    props.showAlert("Text converted to lowercase", "success");
  }

  const handleclrclick=()=>{
    // console.log("Clear button was clicked!")
    setText('');
    props.showAlert("Text cleared", "success");
  }

  const handlecopyclick=()=>{
    // console.log("Copy button was clicked!")
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to your clipboard!", "success");
  }
  const handleonchange=(event)=>{
    console.log("ON change");
    setText(event.target.value);
  }

  return (
    <>
    <div>
        <h1 className={`text-${props.mode==='light'?'dark':'white'}`}>{props.heading}</h1>
        <div className={`mb-3 my-3 text-${props.mode==='light'?'dark':'white'}`}>
          <textarea className="form-control" data-bs-theme={props.mode} onChange={handleonchange} id="myBox" value={text} rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to UPPERCASE!</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase!</button>
        <button className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleclrclick}>Clear text</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'white'}`}>
        <h2>Your text summary</h2>
        <p className="summary">{text.length} characters, {text.trim()===''?0:text.trim().split(/\s+/).length} words</p>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'white'}`}>
      <h3>Preview</h3>
      <p>
        {text.length>0?text:"Enter something in the textbox to preview"}
      </p>
    </div>
    </>
  )
}


TextForm.proptype = {heading : PropTypes.string.isRequired}