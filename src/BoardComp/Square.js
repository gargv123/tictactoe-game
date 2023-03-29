import React from "react";
import "./Square.css";
function Square(props){
    return (
        <div >
            <div className="square" onClick={props.onclk}>
                <h4>{props.value}</h4>
            </div>
        </div>
    )
}

export default Square;