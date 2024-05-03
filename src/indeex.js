import  React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import { IMAGES } from "./images.constants";
import './index.css';
import sdata from "./Data";
// import App from './App';
      
const netflix = "Top Netflix Movies Here ! "

// function cardNo(val, index) {
//   const imageKey = Object.keys(IMAGES)[index];
//   return (
//     <Card 
//     imgsrc={IMAGES[imageKey]}
//     title = { val.title }
//     sname = { val.sname }
//     link = { val.link }
//   />
//   )
// }

ReactDom.render(
    <>
    <h1 className="netflix">{netflix}</h1>
     { sdata.map((val, index) => {
        const imageKey = Object.keys(IMAGES)[index];
        return (
          <>
            <Card 
              key = { val.id }
              imgsrc={IMAGES[imageKey]}
              title = { val.title }
              sname = { val.sname }
              link = { val.link }
            />
        </>
        )
      })}
    </>
, document.getElementById("root"));