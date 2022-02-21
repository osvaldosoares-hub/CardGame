import './style.css'

export const PlayerScore = (points =0)=>{
    return `
        <ol class="player-score" data-points="${points}">
        <li class="pointer">Um</li>
        <li class="pointer">Dois</li>
        <li class="pointer">Três</li>
    </ol>
    `;
}