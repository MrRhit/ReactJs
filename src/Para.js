import React from "react";
import './index.css';

// eslint-disable-next-line no-undef
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const heading = {
    color: "blue",
    textAlign: "center"
  };

function Para() {
    return (
        <>
            <p contentEditable='true' style={heading}>This is again ReactJS</p>
            <p>List of {2 + 3} Best Series</p>
            <p className="heading">Current Date : {currDate}</p>
            <p style={{color:'black', textAlign:'center'}}>Current Time : {currTime}</p>
        </>
    )
}


export default Para;