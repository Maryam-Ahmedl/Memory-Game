import {Card} from "./Card.js"
export class Game{

    constructor(){

    }
    
    CreateCards(): Card[]{
        const images: string[] = [
            "./assets/images/0.jpg",
            "./assets/images/1.jpg",
            "./assets/images/2.jpg",
            "./assets/images/3.jpg",
            "./assets/images/4.jpg",
            "./assets/images/5.jpg",
            "./assets/images/6.jpg",
            "./assets/images/7.jpg",
            "./assets/images/8.jpg",
            "./assets/images/9.jpg",
            "./assets/images/10.jpg",
        ]
        let cards: Card[] = [];
        let id = 1;
        images.forEach(c => {
            cards.push(new Card(id++,c))
            cards.push(new Card(id++,c))
        })

        return cards;
    }

    shuffleCards(cards:Card[]): Card[]{
        for(let i = cards.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [cards[i], cards[j]] = [cards[j]!, cards[i]!];
        }
        return cards;
    }
}