import "./Rules.css";

export default function Rules({dis}){
    return (
        <div className="rules_div" style={{display:dis}}>
                <div className="heading">
                    <p>How To Play Dice Game</p>
                </div>
                <div className="rules_content">
                    <ul>
                        <li>Select any number</li>
                        <li>click on dice image</li>
                        <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
                        <li>if you get wrong guess then 2 point will be dedcuted</li>
                    </ul>
                </div>
        </div>
    )
}
