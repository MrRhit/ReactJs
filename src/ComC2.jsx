import React, {useContext} from 'react';
import { firstname, lastname } from './CompA';

const CompC = () => {
    const fname = useContext(firstname);
    const lname = useContext(lastname);

    {
        return (
            <>
                <h1>
                    My name is {fname} {lname}
                </h1>
            </>
        )
    }
}
export default CompC;
