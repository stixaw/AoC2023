/*  Description: When a card has winning numbers it now adds the
Instead, scratchcards only cause you to win more scratchcards equal to the number of winning numbers you have.

Specifically, you win copies of the scratchcards below the winning card equal to the number of matches. 
So, if card 10 were to have 5 matching numbers, you would win one copy each of cards 11, 12, 13, 14, and 15.

Process all of the original and copied scratchcards until no more scratchcards are won. 
Including the original set of scratchcards, how many total scratchcards do you end up with?
*/

import input from "./example1.js"

const cards = input.split("\n").map((x) => x.replace(/  /g, " 0"))

let totalPoints = 0
let winningCards = []

for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  const [winningNumbers, yourNumbers] = card.split("|")
  const winningNumbersArray = winningNumbers.trim().split(" ")
  const yourNumbersArray = yourNumbers.trim().split(" ")
  let points = 0
  let matches = []
  for (let number of yourNumbersArray) {
    if (winningNumbersArray.includes(number)) {
      points++
      matches.push(number)
    }
  }

  winningCards.push({ card: i, matches: points, copies: 1, processed: false }) // use index instead of card name
  totalPoints += points > 0 ? Math.pow(2, matches.length - 1) : 0
}

console.log(`Total points: ${totalPoints}`)
console.log("Winning cards: ", winningCards)