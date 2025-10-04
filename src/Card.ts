export class Card{
    id:number;
    value: string;
    flipped:boolean
    constructor(id:number,value:string){
        this.id = id
        this.value = value
        this.flipped = false
    }
}