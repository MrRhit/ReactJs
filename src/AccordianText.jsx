import React, { useState } from 'react';

const AcTex = ( {id,Question,Answer}) => {
    const [show, setShow] = useState(false);

    return (
        <>
                <div className='accordian_text'><br />
                    <div className='accordian_question'>
                        <p className='add_icon' onClick={() => setShow(!show)}>{ show? '➖':'➕'}</p>
                        <p> {Question}</p><br />
                    </div>
                    {show && <p className='accordian_answer'>{Answer}</p>}
                </div>
        </>
    )
}

export default AcTex;