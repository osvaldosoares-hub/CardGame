import { BoardGame } from "./src/object/boardGame"
import './src/styles/generic/reset.css'
import './src/styles/settings/styles.css'
import './src/styles/elements/base.css'
import { PlayerName } from "./src/components/playerName"
const body = document.querySelector("#root")


body.insertAdjacentHTML('beforeend',

        `
        ${PlayerName("player 1")}
        ${PlayerName("player 2")}
        ${BoardGame(6)}
        
        `) 

