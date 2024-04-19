import React from "react";

const DummyImages = "https://picsum.photos/200/300";
const DummyImages1 = "https://picsum.photos/250/300";
const DummyImages2 = "https://picsum.photos/300/300";
const website = "https://www.youtube.com/";

function Img() {
    return (
        <>
            <div className='div_img'>
                <img src={DummyImages} alt="DummmyImages" />
                <img src={DummyImages1} alt="DummmyImages1" />

                <a href={website} target="_blank">
                    <img src={DummyImages2} alt="DummmyImages2" />
                </a>
            </div>
        </>
    )
}

export default Img;