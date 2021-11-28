import React, { useState } from 'react';

const TextUtility = () =>{    
       
        const [value, setValue] = useState("");

    const UpdateValue = (e) =>{
        setValue(e.target.value)
    }

    const touppercase = () =>{
        const newvalue = value.toUpperCase();
        setValue(newvalue);
    }

    const tolowercase = () =>{
        const newvalue = value.toLowerCase();
        setValue(newvalue);
    }
    

    const Clear = () =>{
        setValue("");

    }

    

    // const CopyText = (e) =>{
    //     const newvalue = value.toString().select();
    //     e.target.focus();
    //     document.execCommand('copy');
    //     e.target.focus();
    //     setValue('Copied!');
    //   };
    

    
    return(
        <form>
            <div className="form-group">
                    <textarea className="form-control" 
                    id="exampleFormControlTextarea1" rows="5" 
                    value={value} onChange={UpdateValue}></textarea>
                    <div>Count characters: {value.length}</div>
            </div>
            <button type="button" className="btn btn-primary me-4" onClick={touppercase}>Upper case</button>
                <button type="button" className="btn btn-secondary me-4" onClick={tolowercase}>Lower case</button>
                <button type="button" className="btn btn-success me-4" >copy text</button>
                <button type="button" className="btn btn-danger me-4" onClick={Clear} >clear</button>
            </form>
    )
}
export default TextUtility;