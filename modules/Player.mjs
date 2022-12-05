import { Dice } from "./Dice.mjs";

export class Player {
    constructor(name,numDice = 5) {
        this.name = name;
        this.dice = new Dice(numDice);
        this.score = 0;
    }

    resetGame() {
        this.dice = new Dice();
        this.score = 0;
    }

    playRound() {
        let rounds = 1; 
        while(!this.dice.isEmpty) {
            this.dice.rollAll()
            this.score += this.dice.score;
            this.dice.dropDice()
            rounds++;
        }
    }
}