import {Player} from './Player.mjs'

export class Simulation {
    constructor(simNum, numDice = 5) {
        this.simNum = simNum
        this.numDice = numDice
    }

    runSimulation() {
        let report = ""

        let player = new Player("Nonny",this.numDice)
        let scores = {}

        for(let i = 0; i < this.simNum; i++) {
            player.playRound();
            if(scores.hasOwnProperty(player.score)) {
                scores[player.score]++
            } else {
                scores[player.score] = 1;
            }
            player.resetGame();
        }

        for(let num in scores) {
            report += `Total ${num} occurs ${scores[num]} times\n`
        }

        return report;
    }

}
