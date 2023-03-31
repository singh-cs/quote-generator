import React from "react";

export default function Box(props){
    return(
        <div className="q-container">
            <button onClick={props.handleClick} className="nq-btn">New Quote</button>
            <h2 className="quote">{props.quote ? `"${props.quote.text}`:''}</h2>
            <p className="by-line"><em>{props.quote ? `- ${props.quote.author}`: ''}</em></p>
        </div>
    )
}