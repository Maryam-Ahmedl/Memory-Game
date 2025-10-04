export class Card {
    id;
    value;
    flipped;
    constructor(id, value) {
        this.id = id;
        this.value = value;
        this.flipped = false;
    }
}
