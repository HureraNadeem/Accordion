import React, { useState } from 'react'
import './App.css';

export default function ItemComponent(props) {

    const [show, setShow] = useState(false);

    const clickedEvent = () => {
        show? setShow(false) : setShow(true);
    }

    return (
        <>
            <div className="main-heading">
                <p onClick={()=>{clickedEvent()}}>
                    {show ? "➖" : "➕"}
                </p>
                <h3>{props.question}</h3>
            </div>
            <p className="answer">
                {
                    show ? <p className="answers"> {props.answer} </p> : <p></p>
                }
            </p>
        </>
    )
}
