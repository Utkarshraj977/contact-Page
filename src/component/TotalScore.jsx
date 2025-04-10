import "./TotalScore.css";
export default function TotalScore({score}) {
    return (
        <div className="gmplay_score">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
    )
}
