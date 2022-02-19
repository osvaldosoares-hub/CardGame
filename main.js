import { CardGame } from "/src/components/card"
import './src/styles/generic/reset.css'
import './src/styles/settings/styles.css'
import './src/styles/elements/base.css'

const body = document.querySelector("#root")
const HtmlCardgame= CardGame()

body.insertAdjacentHTML('beforeend',HtmlCardgame) 

