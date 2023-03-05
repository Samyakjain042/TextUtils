import React from 'react'
import {useState} from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("Your Text Here...")
    const clickup = ()=>{
        console.log("Converted to UpperCase")
        let newText = text.toUpperCase();
        settext(newText)
        props.showalert("Converted to Uppercase!", "success");
    }
    const clicklow = ()=>{
        console.log("Converted to LowerCase")
        let newText = text.toLowerCase();
        settext(newText)
        props.showalert("Converted to Lowercase!", "success");

    }
    const handleOnChange = (event)=>{
        // console.log("Handled")
        settext(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard!", "success");

    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showalert("Extra spaces Removed", "success");

    }
  return (
    <>
    <div style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"rgb(6 12 30)":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" onClick={handleCopy} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={clickup} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clicklow} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak} >Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces} >Handle Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>Text Summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text===""?0:text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
