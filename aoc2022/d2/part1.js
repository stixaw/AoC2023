import input from "./example.js"

/**
 * THEM             ME
 * A = Rock         X = Rock, 1
 * B = Paper        Y = Paper, 2
 * C = Scissors     Z = Scissors, 3
 * 
 * Win = 6
 * Tie = 3
 * Loss = 0
 */

const mapInput = { 'A': 'Rock', 'B': 'Paper', 'C': 'Scissors', 'X': 'Rock', 'Y': 'Paper', 'Z': 'Scissors' }
const pointsShape = { 'Rock': 1, 'Paper': 2, 'Scissors': 3 }
const pointsOutcome = { 'Lose': 0, 'Draw': 3, 'Win': 6 }


const throws = input.split('\n').map((throws) => throws.split(" "))
console.log(throws)


