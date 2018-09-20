import React from 'react';
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop"
import "../Backdrop/Backdrop.css"

const Modal = (props) =>(
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className="Modal"
        style={{
            transform: props.show? 'translateY(0)':'translateY(-100vh)',
            opacity: props.show? '1':'0'
        }}>
        {props.children}
        <button className='CloseBtn' onClick={props.modalClosed}>close</button>
    </div>
    </div>
    
);

export default Modal;