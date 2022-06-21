import React from 'react'
import { useState } from 'react';
 
export default function TextForm(props){


    const handleOnChange=(event)=>{
        setText(event.target.value);

    }

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        text ? props.showAlert('Convereted to UpperCase!','success'):props.showAlert('You have not entered anything Yet!','warning');
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        text ? props.showAlert('Convereted to LowerCase!','success'):props.showAlert('You have not entered anything Yet!','warning');
    }
    const ClearText=()=>{
        let newText = "";
        setText(newText);
        text ? props.showAlert('Text Cleared!','success'):props.showAlert('You have not entered anything Yet!','warning');
    }
    const TextCopy=()=>{
        var ctext = document.getElementById("myBox");
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
        text ? props.showAlert('Text Copied to Clipboard!','success'):props.showAlert('You have not entered anything Yet!','warning');
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        text ? props.showAlert('Extra Spaces Removed!','success'):props.showAlert('You have not entered anything Yet!','warning');
    }





    const [text, setText] = useState("");

    return(
        <>
        <div className='container' style={{color: props.mode==="light"?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==="light"?'white':'grey', color: props.mode==="light"?'#042743':'white'}} onChange={handleOnChange} id = "myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={TextCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            


        </div>
        <div className="container my-3" style={{color: props.mode==="light"?'#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in box to preview it here"}</p>
        </div>

        </>

    );
}