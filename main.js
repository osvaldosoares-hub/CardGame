
import './src/styles/generic/reset.css'
import './src/styles/settings/styles.css'
import './src/styles/elements/base.css'
import './style.css'
import { ScoreBoard } from "./src/components/playerScore"

import { BoardGame } from './src/object/boardGame'

const body = document.querySelector("#root")


body.insertAdjacentHTML('beforeend',

        `
        ${ScoreBoard()}
        ${BoardGame(2)}
        
        `) 

