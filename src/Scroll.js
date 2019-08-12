import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div id='scrollable'>
            {props.children}
        </div>
    );
}

export default Scroll;
