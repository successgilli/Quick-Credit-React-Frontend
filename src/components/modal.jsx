import React, { useState } from 'react';
import '../css/modal.css';

const Modal = ({ show, btnText, displayText, handleClick, click }) => {
    const [ close, setClose ] = useState(show);

    const handleCloseClick = () => {
        click();
    }

    return (
        <div id={ show ? "modal-background" : "modal-backgroundShow" }>
            <div id="modal-applyContent">
                <span id="modal-outerClose">
                    <span id="modal-close" onClick={handleCloseClick}>&#10006;</span>
                </span>
                <div id="resDiv">{displayText}</div>
                <div class="btns">
                    <button className='btn' onClick={handleClick}>{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
