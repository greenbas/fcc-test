import { Dice } from "./Dice.mjs";

export class Player {
    constructor(name) {
        this.name = name;
        this.dice = new Dice();
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
        console.log(`Game Finished in ${rounds} rounds`)
        console.log(`Score: ${this.score}`)
    }
}