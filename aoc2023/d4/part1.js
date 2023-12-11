/** you have to figure out which of the numbers you have appear in the list of winning numbers. 
The first match makes the card worth one point and each match after the first doubles the point value of that card.

it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have.

Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
Card 4 has one winning number (84), so it is worth 1 point.
Card 5 has no winning numbers, so it is worth no points.
Card 6 has no winning numbers, so it is worth no points.
So, in this example, the Elf's pile of scratchcards is worth 13 points.
*/

import input from "./input.js"

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