import React from 'react'
import { useState } from 'react'


export default function TextUtil(props) {
    const [text,setText]=useState('Enter the text here');
    const handleOnClickUpper= ()=>{        
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    const handleOnClickLower= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        
    }
    const handleOnClickClearText=()=>{
        let newText="";
        setText(newText);
    }
    const handleOnClickReverseText=()=>{
        let newText=text;
        newText=newText.split("");
        newText=newText.reverse();
        newText= newText.join("");
        setText(newText);

    }
    const handleOnClickCopyText=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleOnClickRemoveExtraSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div>
            <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className='my-4'>{props.heading}</h2>
                <label for="a1" class="form-label">Example textarea</label>
                <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} ></textarea>
            </div>
            <button type="button" class="btn btn-secondary mx-2 " onClick={handleOnClickUpper}>To Uppercase</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={handleOnClickLower}>To Lowercase</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={handleOnClickClearText}>Clear Text</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={handleOnClickReverseText}>Reverse Text</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={handleOnClickCopyText}>Copy Text</button>
            <button type="button" class="btn btn-secondary mx-2" onClick={handleOnClickRemoveExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary here</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Enter some text tp prevew here"}</p>
        </div>
        </>
    )
}
