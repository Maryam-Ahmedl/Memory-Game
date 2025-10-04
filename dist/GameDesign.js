import { SoundManager } from "./SoundManager.js";

export class GameDesign {
    playGame;
    constructor(game) {
        this.playGame = game;
    }
    designCardsContainer(cards) {
        let index = 1;
        const cardContainer = document.getElementById("GameContainer");
        if (!cardContainer)
            return;
        cardContainer.innerHTML = "";
        cards.forEach(card => {
            const col = document.createElement("div");
            col.className = "col-4 col-md-3 col-lg-2 d-flex justify-content-center";
            const Cardstyle = document.createElement("div");
            Cardstyle.className = "card game-card position-relative d-flex justify-content-center align-items-center";
            const numberBadge = document.createElement("span");
            numberBadge.className = "card-number fw-bold";
            numberBadge.textContent = index.toString();
            const CardImg = document.createElement('img');
            CardImg.src = card.flipped ? card.value : './assets/back.jpg';
            CardImg.alt = 'card';
            CardImg.className = "card-img-top";
            Cardstyle.append(numberBadge);
            Cardstyle.append(CardImg);
            col.appendChild(Cardstyle);
            cardContainer.appendChild(col);
            CardImg.addEventListener('click', () => {
                const obj = {
                    Wrapper: Cardstyle,
                    value: card.value
                };
                this.playGame.handleFlip(obj);
                SoundManager.PlaySong('Flip');
            });
            index++;
        });
    }
}
