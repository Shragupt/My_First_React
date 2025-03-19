import React, {useState} from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }

  const handleAltClick = () => {
    let newText = '';
    for(let i=0;i<text.length;i++){
      if(i % 2 === 0){
        newText += text[i].toUpperCase();
      }
      else{
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
  }

  const handleInverseClick = () => {
    let newText = '';
    for(let i=text.length-1;i>=0;i--){
      newText += text[i];
    }
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox"rows="6">
        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleAltClick}>Convert To Alternatives</button>
      <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse Text</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>

    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>
  );
}
