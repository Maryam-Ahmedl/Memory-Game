type sound = "Lose" | "Flip" | "Match" | "Mis_Match" | "PlaySong"
export class SoundManager{
    private static sounds : Record<sound, HTMLAudioElement> = {
        Match : new Audio('./assets/audio/good.mp3'),
        Mis_Match : new Audio('./assets/audio/fail.mp3'),
        Flip : new Audio('./assets/audio/flip.mp3'),
        Lose :new Audio('./assets/audio/game-over.mp3'),
        PlaySong : new Audio('/assets/audio/fulltrack.mp3')
    }

    static PlaySong(sound:sound){
        const audio = this.sounds[sound];
        audio.currentTime = 0;
        audio.play().catch(err => console.warn("Audio blocked",err));
    }
}