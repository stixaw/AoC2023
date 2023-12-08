import input from "./input.js"

const cards = input.split("\n").map((x) => x.replace(/  /g, " 0"))

/** you have to figure out which of the numbers you have appear in the list of winning numbers. 
The first match makes the card worth one point and each match after the first doubles the point value of that card.

it looks like each card has two lists of numbers separated by a vertical bar (|): a list of winning numbers and then a list of numbers you have.

In the card 1 has five winning numbers (41, 48, 83, 86, and 17) and eight numbers you have (83, 86, 6, 31, 17, 9, 48, and 53). 
Of the numbers you have, four of them (48, 83, 17, and 86) are winning numbers! 
That means card 1 is worth 8 points (1 for the first match, then doubled three times for each of the three matches after the first).

Card 2 has two winning numbers (32 and 61), so it is worth 2 points.
Card 3 has two winning numbers (1 and 21), so it is worth 2 points.
Card 4 has one winning number (84), so it is worth 1 point.
Card 5 has no winning numbers, so it is worth no points.
Card 6 has no winning numbers, so it is worth no points.
So, in this example, the Elf's pile of scratchcards is worth 13 points.
*/

let totalPoints = 0


for (let card of cards) {
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

  totalPoints += points > 0 ? Math.pow(2, matches.length - 1) : 0

  console.log(`Card ${card} is worth ${points} points`)
  console.log(`Matches: ${matches}`)
  console.log(`Total points: ${totalPoints}`)
}
