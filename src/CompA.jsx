import React, { createContext } from 'react';
import ComB from './ComB';

const firstname = createContext();
const lastname = createContext();

const ContextApi = () => {
    return (
        <>
            <firstname.Provider value={"Kuchbhi"}>
              <lastname.Provider value={"ptanhi"}>
                 <ComB />
              </lastname.Provider>
            </firstname.Provider>
        </>

    )
}

export default ContextApi;
export { firstname, lastname };