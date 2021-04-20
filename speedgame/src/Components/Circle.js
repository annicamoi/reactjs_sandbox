import React from 'react';
import "./Circle.css";

const Circle = (props) => {
    return (
        <div className={`circle ${props.color} ${props.active ? " active" : ""}`} onClick={props.click}>
            <p>{props.id} style={{pointerEvents: props.disabled ? "auto" : "none" }}</p>
        </div>
    );
};

export default Circle;



