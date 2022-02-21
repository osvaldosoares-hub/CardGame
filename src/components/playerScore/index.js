import { PlayerName } from "../playerName"
import './style.css'
export const ScoreBoard=()=>{
    return `
        <header class="score-board">
        ${PlayerName("player 1")}
        ${PlayerName("player 2")}
        </header>
    `;
} 