import './style.css'
export const CardGame = (icon= "alura-pixel",alt="logo da alura")=>{
    
    return`
        <article class="card-game">
            <img src="img/${icon}.png" alt=${alt}>     
        </article>
    `
}