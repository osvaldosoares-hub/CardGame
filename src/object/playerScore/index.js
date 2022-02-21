import { PlayerScore } from "../../components/placar";
import { PlayerName } from "../../components/playerName"
import { vsPlayer } from "../../components/vsPlayer";
import './style.css'
export const ScoreBoard=()=>{
    return `
        <header class="score-board">
        ${PlayerName("player 1")}
        ${PlayerScore(2)}
        ${vsPlayer()}
        ${PlayerScore(1)}
        ${PlayerName("player 2")}
        
        </header>
    `;
} 