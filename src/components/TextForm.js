import React, {useState} from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here');
  
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"rows="6">
        </textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
      </div>

    <div className="conatiner my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
