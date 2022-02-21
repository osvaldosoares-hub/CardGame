
import { CardFrontBAck } from '../../components/cardFrontBack'
import './styles.css'
export const BoardGame= (amountCards)=>{
    
    

    const HtmlCardGame= CardFrontBAck()
    const HtmlboardGame =  HtmlCardGame.repeat(amountCards)


    console.log(HtmlCardGame)
    return `<section class="border-game">
                    ${HtmlboardGame}
            </section>`;
}