import React from 'react';
import spinnerGif from '../Assets/Spinner.gif';

function Spinner() {
    return (
        <div>
            <img 
                src={spinnerGif}
                style={{width:'150px',margin:'auto',display:'block'}}
                alt="loading gif"/>
        </div>
    )
}

export default Spinner
