import input from "./example1.js"

const cards = input.split("\n").map((x) => x.replace(/  /g, " 0"))

let winningCards = {}

for (let card of cards) {
  const [winningNumbers, yourNumbers] = card.split("|")
  const winningNumbersArray = winningNumbers.trim().split(" ")
  const yourNumbersArray = yourNumbers.trim().split(" ")
  let points = 0
  let matches = []
  for (let number of yourNumbersArray) {
    if (winningNumbersArray.includes(number)) {
      matches.push(number)
    }
  }

  totalPoints += points > 0 ? Math.pow(2, matches.length - 1) : 0

  console.log(`Card ${card} is worth ${points} points`)
  console.log(`Matches: ${matches}`)
  console.log(`Total points: ${totalPoints}`)
}