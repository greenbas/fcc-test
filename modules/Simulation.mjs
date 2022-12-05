import {Player} from './modules/Player.mjs'

export class Simulation {
    constructor(simNum) {
        this.simNum = simNum
    }

    runSimulation() {
        let report = ""

        let player = new Player("Nonny")
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

    }

}
