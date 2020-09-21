import React from 'react';

const Buttons = () => {

    const btns = [1, 2, 3, 4, 5];
    return <div>
        {
            btns.map((item)=><button>{item}</button>)
        }</div>
}

export default Buttons;