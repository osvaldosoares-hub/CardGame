import { CardGame } from "../../components/card";

export const BoardGame= (amountCards)=>{
    
    

    const HtmlCardGame= CardGame()
    const HtmlboardGame =  HtmlCardGame.repeat(amountCards)


    console.log(HtmlCardGame)
    return HtmlboardGame;
}