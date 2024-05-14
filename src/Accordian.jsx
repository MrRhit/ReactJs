import React, { useState } from 'react';
import './Accordian.css';
import AccordianData from './AccordianData';
import AcTex from './AccordianText';

const Content = () => {
    const [text, setData] = useState(AccordianData);

    return (
        <>
            <div className='content_style'>
                <p style={{ textAlign: 'center', fontSize: '20px' }}>Reactjs Interview Question</p>

                {
                    text.map((curElem) => {
                        const { id } = {...curElem};
                        return <AcTex key={id} {...curElem}/>
                    })
                }
              

            </div>

        </>
    )
}

export default Content;

