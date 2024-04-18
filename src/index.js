import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const arr = ['Ajay', 'Vijay', 'Pankaj'];
// In React v16 it's possible for render to return 
// an array of elements
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello World ! </h1>);

const fname = "Rohit";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().getHours();
const DummyImages = "https://picsum.photos/200/300";
const DummyImages1 = "https://picsum.photos/250/300";
const DummyImages2 = "https://picsum.photos/300/300";
const website = "https://www.youtube.com/";

const heading = {
  color: "#ff00ff",
  textAlign : "center",
};

const greeting = {
  color:"#ff00ff",
  textAlign :"center"
};

let greetings = '';

if (currTime >=1 && currTime < 12) {
  greetings = "Good Morning";
} else if (currTime >=12 && currTime < 19) {
  greetings = "Good Afternoon";
}else{
  greetings = "Good Night";
}

ReactDOM.render(
  <>
    <h1 className='heading'>{`Hello ${fname}, This is Netflix Pack`}</h1>
    <p contentEditable='true' style={heading}>This is again ReactJS</p>
    <p>List of {2 + 3} Best Series</p>
    <p className="heading">Current Date : {currDate}</p>
    <p style={{color:'#00ffff', textAlign:'center'}}>Current Time : {currTime}</p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>My Holo Love</li>
      <li>My first-2 Love</li>
      <li>Mr Robot</li>
    </ol>
   
     <h1 style={greeting}>Hello Sir , { greetings }</h1>
    <div className='div_img'>
      <img src={DummyImages} alt="DummmyImages" />
      <img src={DummyImages1} alt="DummmyImages1" />

      <a href={website} target="_blank">
        <img src={DummyImages2} alt="DummmyImages2" />
      </a>
    </div>

  </>,
  document.getElementById("root")
);

const h1 = document.createElement("h1");
h1.innerHTML = "Hello World Again";
document.getElementById("root").appendChild(h1);

