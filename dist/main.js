import { Game } from "./Game.js";
import { GameDesign } from "./GameDesign.js";
import { PlayGame } from "./Play.js";
import { SoundManager } from "./SoundManager.js";
const startBtn = document.getElementById("startbtn");
const wrapper = document.getElementById("Game-Wrapper");
startBtn?.addEventListener('click', () => {
    SoundManager.PlaySong('PlaySong');
    startBtn.classList.add("d-none");
    wrapper?.classList.remove("d-none");
    const game = new Game();
    const cards = game.CreateCards();
    const shuffledCards = game.shuffleCards(cards);
    const playGame = new PlayGame(cards.length);
    const gameDesign = new GameDesign(playGame);
    gameDesign.designCardsContainer(shuffledCards);
});
