import { SoundManager } from "./SoundManager.js";

export class PlayGame {
    flippedCards = [];
    total_Cards;
    matched_pairs = 0;
    progressBar;
    restartBtn;
    constructor(totalCards) {
        this.total_Cards = totalCards / 2;
        this.progressBar = document.getElementById('gameProgress');
        this.restartBtn = document.getElementById('restartBtn');
    }
    handleFlip(obj) {
        const { Wrapper, value } = obj;
        const img = Wrapper.querySelector("img");
        const number = Wrapper.querySelector("span");
        if (!img || !number || img.src.includes(value) || this.flippedCards.length === 2) {
            return;
        }
        img.src = value;
        number.style.display = 'none';
        this.flippedCards.push(obj);
        if (this.flippedCards.length) {
            setTimeout(() => {
                this.checkEquivalent();
            }, 1000);
        }
    }
    checkEquivalent() {
        const [first, second] = this.flippedCards;
        if (first.value === second.value) {
            this.matched_pairs++;
            this.updateProgress();
            SoundManager.PlaySong('Match');
        }
        else {
            this.flipBack(first);
            this.flipBack(second);
            SoundManager.PlaySong('Mis_Match');
        }
        this.flippedCards = [];
        if (this.matched_pairs === this.total_Cards) {
            this.finishGame();
        }
    }
    flipBack(obj) {
        const img = obj.Wrapper.querySelector("img");
        const badge = obj.Wrapper.querySelector("span");
        if (img && badge) {
            img.src = "./assets/back.jpg";
            badge.style.display = "flex";
        }
    }
    updateProgress() {
        const percent = Math.round((this.matched_pairs / this.total_Cards) * 100);
        if (this.progressBar) {
            this.progressBar.style.width = `${percent}%`;
            this.progressBar.textContent = `${percent}%`;
        }
    }
    restartGame(callback) {
        this.matched_pairs = 0;
        this.flippedCards = [];
        if (this.progressBar) {
            this.progressBar.style.width = '0%';
            this.progressBar.textContent = '0%';
        }
        this.restartBtn?.classList.add("d-none");
        callback();
    }
    finishGame() {
        setTimeout(() => {
            alert("🎉 Congratulations! You matched all cards!");
            this.restartBtn?.classList.remove("d-none");
        }, 500);
    }
}
