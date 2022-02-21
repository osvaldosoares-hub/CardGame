import { CardGame } from "../../components/card";
import './styles.css'
export const BoardGame= (amountCards)=>{
    
    

    const HtmlCardGame= CardGame()
    const HtmlboardGame =  HtmlCardGame.repeat(amountCards)


    console.log(HtmlCardGame)
    return `<section class="border-game">
                    ${HtmlboardGame}
            </section>`;
}