import { useState } from "react";
import "./CardNumber.css";
export default function CardNumber({ onSelect, selected, err }) {
    const arr = [1, 2, 3, 4, 5, 6];


    const handleClick = (val) => {
        onSelect(val);
    }
    return (

        <div className="card_outer_box">
            
            <p style={{ color: "red", fontWeight: "bold",}}>
                {err}
            </p>

            <div className="gmplay_sl_num">

                {arr.map((val, i) => <div key={i} className={`num ${selected === val ? "select" : ""}`}
                    onClick={() => handleClick(val)}>{val}</div>)}
            </div>
            <p>Select Numbers</p>
        </div>
    )
}


