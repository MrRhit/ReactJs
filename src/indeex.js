import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {add, sub, div, mul} from './Calculate';


const arr = ['Ajay', 'Vijay', 'Pankaj'];
// In React v16 it's possible for render to return 
// an array of elements
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello World ! </h1>);

ReactDOM.render(
  <>
    <App/>
     <p>The Sum of two no is { add(30,23)}</p>
     <p>The Sum of two no is { sub(30,23)}</p>
     <p>The Sum of two no is { div(30,23)}</p>
     <p>The Sum of two no is { mul(30,23)}</p>
  </>

,document.getElementById("root"));

const h1 = document.createElement("h1");
h1.innerHTML = "Hello World Again";
document.getElementById("root").appendChild(h1);

