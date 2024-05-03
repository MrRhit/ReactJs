import React from 'react';
import './index.css';

const Slot = () => {
    return (
        <>
            <h1 className='heading_style'>This is Slot Machine</h1>
        </>
    )
}
const SlotM = (props) => {
    const x =  props.x;
    const y =  props.y;
    const z =  props.z;

    if (x === y && y === z) {
        return (
            <>
                    <div className='slot_inner'>
                        <h3>
                            {x} {y} {z}
                        </h3>
                        <h2 style={{ color:'green'}}>This is Matching</h2>
                    </div>
            </>
        )
    } else {
        return (
            <>
                <div className='slot_inner'>
                    <h3>
                        {x} {y} {z}
                    </h3>
                    <h2>This is Not Matching</h2>
                </div>
            </>
        )
    }
}


export { Slot, SlotM };