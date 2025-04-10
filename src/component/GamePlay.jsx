import { useState, useEffect } from "react";
import CardNumber from "./CardNumber";
import TotalScore from "./TotalScore";
import PlayDiceReset from "./PlayDiceReset";
import "./GamePlay.css";

export default function GamePlay() {
   const [scr, setScr] = useState(0);
   const [u_num, setU_num] = useState(null);
   const [d_num, setD_num] = useState(null);
   const [selectedCard, setSelectedCard] = useState(null);
   const [err,setErr]=useState();
   useEffect(() => {
      if (u_num !== null && d_num !== null) {
         if (u_num === d_num) {
            setScr(prev => prev + 10);
         } else {
            setScr(prev => prev - 2);
         }
      }
   }, [d_num]); 

   const scoreupdate=()=>{
       setScr(0);
       setSelectedCard(null);
   }
   const colorUpdate=(val)=>{
      setSelectedCard(null);
   }
   return (
      <main>
         <div className="gmplay_main">
            <TotalScore score={scr} />
            <CardNumber
               onSelect={(val) => {
                  setU_num(val);
                  setSelectedCard(val);
               }}
               selected={selectedCard}
               err={err} 
            /> 
         </div>
         <PlayDiceReset setErr={setErr} select={selectedCard} onDiceRoll={setD_num} ResetScore={scoreupdate} Resetcolor={colorUpdate}/>
      </main>
   );
}
 