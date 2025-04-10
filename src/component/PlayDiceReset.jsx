import "./PlayDiceReset.css";
import Button from "./Button";
import { useState } from "react";
import Rules from "./Rules";

export default function PlayDiceReset({onDiceRoll,ResetScore,Resetcolor,select,setErr}) {
    const [DiceImg,setDiceImg]=useState("dice_1.png");
    const [rules,setRules]=useState("none");


    const handleDiceImg=()=>{
        if(!select){
            setErr("you have not select any number!");
            return;
        }
        setErr("");
        const [x,imgpath]=roledDice();
         setDiceImg(imgpath);
         onDiceRoll(x);
         Resetcolor();
    }
    const roledDice=()=>{
        let x = Math.floor(Math.random() * 6) + 1;
        return [x,`dice_${x}.png`];
    }

    const showRules=()=>{
           setRules(rules ==="none"? "unset" : "none"); 
    }
    return (
        <div className="dice">
            <div className="diceimg">
                <img onClick={handleDiceImg} src={DiceImg} alt=""></img>
            </div>
            
            <p>Click on Dice to Roll</p>
            <div className="resetbtn">
                <Button text="Reset Score" onclick={ResetScore} />
                <Button onclick={showRules} text="Show Rules" />
            </div>
            <Rules dis={rules}/>
        </div>
    )
}
