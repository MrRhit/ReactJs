import React from 'react';
import Heading  from './Heading';
import Para from './Para';
import List from './List';
import './index.css';
import Greet from './Greet';
import Img from './Images';
import {Slot,SlotM} from './Slot';
import Count from './Count';
import Time from './Time';
import Event from './Event';
import Form from './Form';
import  NewForm  from "./NewForm";
import ToDoApp from './ToDo';

function App() {
    return (
        <>
             <Heading/>
             <Para/>
             <List/>
             <Greet/>
             <Img/>
             <Slot/>

             <div className='slotMachine'>
                <SlotM  x="😊" y="😊" z="😊"/>
                <SlotM x="😂" y="❤️" z="😁"/>
                <SlotM x="🤣" y="😘" z="💕"/>
                <SlotM x="🍌" y="🍌" z="🍌"/>
             </div><br/>
           <Count/><br/>
           <Time/><br/>
           <Event/><br/>
           <Form/><br/>
           <NewForm/><br/>
           <ToDoApp/>
        </>

    );
};

export default App;