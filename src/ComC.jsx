import React from 'react';
import {firstname ,lastname } from './CompA';

const CompC = () => {
    return (
        <>
            <firstname.Consumer>
                {(fname) => {
                    return (
                        <lastname.Consumer> 
                        {(lname) => {
                            return <p>My name is {fname} {lname} </p>
                        }}
                        </lastname.Consumer> 
                    )
                }}
            </firstname.Consumer>
        </>
    )
}
export default CompC;

