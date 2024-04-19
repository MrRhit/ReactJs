import React from "react";

const greeting = {
    color:"#ff00ff",
    textAlign :"center"
  };
  
    let curTime = new Date();
    curTime = curTime.getHours();
    let greetings = '';
    const cssStyle = {};

    if (curTime >=1 && curTime < 12) {
    greetings = "Good Morning";
    cssStyle.color = "green";
    } else if (curTime >=12 && curTime < 19) {
    greetings = "Good Afternoon";
    cssStyle.color = "orange";
    }else{
    greetings = "Good Night";
    cssStyle.color = "black";
    }

function Greet() {
    return(
        <>
             <div className='Style'>
                <h2 style={greeting}>Hello Sir ,<span style={cssStyle}> { greetings } </span> </h2>
            </div>
        </>
    )
}

export default Greet;