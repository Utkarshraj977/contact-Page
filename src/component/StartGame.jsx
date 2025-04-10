import { useState } from "react";
import Button from "./Button";
import "./StartGame.css";
export default function StartGame({toggle}){
    
    return (
        <div className="stGame_main">
            <div className="stGamedice_png">
                <img src="dices_1.png"></img>
            </div>
            <div className="stGame_text">
                <h1>DICE GAME</h1>
                <Button onclick={toggle} text="PLAY NOW"/>
                
            </div>
        </div>
    )
}
