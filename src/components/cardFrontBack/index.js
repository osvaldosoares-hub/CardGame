import { CardGame } from "../card"

export const CardFrontBAck=()=>{
    return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript","logo do javascript")}
        </article>
    `
}