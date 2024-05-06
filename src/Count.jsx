import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';


const Count = () => {

    const [count, Decrement] = useState(0);
    const Inc = () => {
         Decrement(count+1);
    }

    const Dec = () => {
        if (count === 0) {
            alert("Decrement limit are not allow at 0");
        } else {
            Decrement(count-1); 
        }
    }

    return(
        <>
        <div className='count'>
          <h1>{count}</h1>
          {/* <button ></button> */}
          <Button onClick={Inc} variant="contained"><AddIcon/></Button>
          <button onClick={Dec}><RemoveIcon/></button>
        </div>
        </>
    )
}

export default Count;