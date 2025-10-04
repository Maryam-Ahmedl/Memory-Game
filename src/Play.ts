import { SoundManager } from "./SoundManager";

export type wrapperObj = {
    Wrapper : HTMLElement,
    value : string
}
export class PlayGame{
    private flippedCards : wrapperObj[] = []
    private total_Cards:number;
    private matched_pairs:number = 0;
    private progressBar: HTMLElement | null;

    constructor(totalCards:number){
        this.total_Cards = totalCards/2;
        this.progressBar = document.getElementById('gameProgress');
    }

    handleFlip(obj:wrapperObj){
        const {Wrapper,value} = obj;
        const img = Wrapper.querySelector("img") as HTMLImageElement;
        const number = Wrapper.querySelector("span") as HTMLElement;

        if(!img || !number || img.src.includes(value) || this.flippedCards.length ===2){
            return;
        }
        img.src = value;
        number.style.display ='none';
        this.flippedCards.push(obj);
        if(this.flippedCards.length){
            setTimeout(()=> {
                this.checkEquivalent()
            },1000)
        }
    }

    private checkEquivalent(){
        const [first,second] = this.flippedCards;
        if(first!.value === second!.value){
            this.matched_pairs++;
            this.updateProgress();
            SoundManager.PlaySong('Match');
        }
        else{
            this.flipBack(first!);
            this.flipBack(second!);
            SoundManager.PlaySong('Mis_Match');
        }
        this.flippedCards = []
    }

    private flipBack(obj: wrapperObj) {
        const img = obj.Wrapper.querySelector("img") as HTMLImageElement;
        const badge = obj.Wrapper.querySelector("span") as HTMLElement;
        if (img && badge) {
            img.src = "./assets/back.jpg";
            badge.style.display = "flex";
        }
    }

    private updateProgress(){
        const percent = Math.round((this.matched_pairs / this.total_Cards)*100);
        if(this.progressBar){
            this.progressBar.style.width = `${percent}%`;
            this.progressBar.textContent = `${percent}%`;
        }
    }

}