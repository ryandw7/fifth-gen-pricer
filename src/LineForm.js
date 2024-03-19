import React,  {useState } from 'react';


export default function LineForm( {line} ){
    //CHANGE LINE OWNER NAME
    const [ deviceNameText, setDeviceNameText ] = useState(line.name);
    
    const handleDeviceNameTextChange = (e) => {
        setDeviceNameText(e.target.value)
    }


    //HANDLE FORM SUBMISSION
    const handleSubmit = (e) => {
        e.preventDefault();
    
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="deviceName" value={deviceNameText} onChange={handleDeviceNameTextChange}></input>
            <button type="submit">Submit</button>
        </form>
    )
}