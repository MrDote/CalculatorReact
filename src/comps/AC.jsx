import React from "react";
import './AC.css'

export default function AC(props) {
    return <button className='AC' onClick={props.onClick}>{props.value}</button>
}