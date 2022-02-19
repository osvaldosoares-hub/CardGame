import { BoardGame } from "./src/object/boardGame"
import './src/styles/generic/reset.css'
import './src/styles/settings/styles.css'
import './src/styles/elements/base.css'
const body = document.querySelector("#root")
const HtmlboardGame = BoardGame(6)

body.insertAdjacentHTML('beforeend',HtmlboardGame) 

