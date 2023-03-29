import React, { useState } from "react";
import Square from "./Square";
import "./board.css";
function Board(){
    const [state,setState]=useState(Array(9).fill(null));
    const [isXTurn,SetTurn]=useState(true);

    function putval(index){
        if(state[index]!=null){
            return;
        }
        const copystate=[...state];
        copystate[index]=isXTurn? "X" : "O";
        setState(copystate);
        SetTurn(!isXTurn);
    }

    const winner=()=>{
        let winarr=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    
        for(let logic of winarr){
            let [a,b,c]=logic;
            if(state[a]!=null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }        
        }
        return false;
    }

    const iswin=winner();
    const home=()=>{
        setState(Array(9).fill(null));
    }

    return (
        <div className="brdcontainer">

        {iswin? <h3>{winner()} won the game <button onClick={home}>Play Again</button></h3>:
            <>
            <h4 id="head">Please Play {isXTurn? "X" : "O"}</h4>
            <div className="brdrow">
                <Square onclk={()=> putval(0)} value={state[0]}/>
                <Square onclk={()=> putval(1)} value={state[1]}/>
                <Square onclk={()=> putval(2)} value={state[2]}/>
            </div>
            <div className="brdrow">
                <Square onclk={()=> putval(3)} value={state[3]}/>
                <Square onclk={()=> putval(4)} value={state[4]}/>
                <Square onclk={()=> putval(5)} value={state[5]}/>
            </div>
            <div className="brdrow">
                <Square onclk={()=> putval(6)} value={state[6]}/>
                <Square onclk={()=> putval(7)} value={state[7]}/>
                <Square onclk={()=> putval(8)} value={state[8]}/>
            </div>
            </>
    }
        </div>
    )
}

export default Board;