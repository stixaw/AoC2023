import input from "./input.js"

const games = input.split("\n")

/** add up the numbers of the games that would have been possible, you get 8.  for exxample1.js
 * each line is a game with multiple rounds
*/

const validCubeCount = {
  red: 12,
  green: 13,
  blue: 14

}

let validGamesSum = 0

function isGamePossible(game) {
  const subgames = game.split(":")[1].split(";")
  for (let subgame of subgames) {
    const cubes = subgame.split(",")
    for (let cube of cubes) {
      const [count, color] = cube.trim().split(" ")
      if (validCubeCount[color] < count) {
        return false
        break
      }
    }
  }
  return true;
}

for (let index = 0; index < games.length; index++) {
  if (isGamePossible(games[index])) {
    console.log(`Game ${index + 1} is possible`)
    validGamesSum += (index + 1)
  }
}

console.log(`Sum of IDs of valid games: ${validGamesSum}`)