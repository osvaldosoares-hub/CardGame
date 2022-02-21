import { CardGame } from "../card"
import './style.css'

export const CardFrontBAck=()=>{
    window.CardFrontBAck= {}
    window.CardFrontBAck.handleClick = (event)=>{
        const origin = event.target
        const CardFrontBack= origin.closest('.card-front-back')
    
    
    CardFrontBack.classList.toggle('-active')
    }
    return `
        <article class="card-front-back" onClick="CardFrontBAck.handleClick(event)">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">          
            ${CardGame("javascript","logo do javascript")}
            </div>
        </article>
    `
} 