import { Die } from './Dsix.mjs'

export class Dice {
    constructor(numDice = 5,numFaces = 6) {
        this.dice = []
        for (let i = 0; i < numDice; i++) {
            this.dice.push(new Die(numFaces));
        }
    }

    rollAll() {
        this.dice.forEach(function (cur) {
            return cur.roll();
        });
        return this;
    }

    get currentValues() {
        return this.dice.map(function (cur) {
            return cur.value;
        });
    }

    get hasThrees() {
        for (let die of this.dice) {
            if (die.value === 3) {
                return true
            }
        }
        return false
    }

    dropDice() {
        if (this.hasThrees) {
            this.dice = this.dice.filter((cur) => (cur.value !== 3))
        } else {
            this.dice.pop();
        }

    }



    get score() {
        if (this.hasThrees) {
            return 0;
        }
        else {
            return this.dice.reduce((acc,cur) => {
                if(acc > cur.value) {
                    return cur.value
                } else {
                    return acc
                }
            },Number.MAX_SAFE_INTEGER)
        }
    }

    get diceString() {
        return JSON.stringify(
            this.dice.map(cur => cur.value)
        )
    }

    get isEmpty() {
        if(this.dice.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}