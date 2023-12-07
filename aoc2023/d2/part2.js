import input from "./input.js"

const games = input.split("\n")

/** determine the fewest number of cubes per color to make each game valid and then multiply those numbers together.  for example2.js
 * power of games is equal to the valid number of cubes per color multiplied together
 * then add up all powers for all games as the result
 * game 1 = 48
 * game 2 = 12
 * game 3 = 1560
 * game 4 = 630
 * game 5 = 36
 * results of adding all powers for each game should be 2286
 */



let validGamesSum = 0

function getGamePower(game) {
  const currentMax = {
    red: 0,
    green: 0,
    blue: 0
  }
  const subgames = game.split(":")[1].split(";")
  for (let subgame of subgames) {
    const cubes = subgame.split(",")
    for (let cube of cubes) {
      const [count, color] = cube.trim().split(" ")
      if (currentMax[color] < count) {
        currentMax[color] = parseInt(count)
      }
    }
  }
  return currentMax.red * currentMax.green * currentMax.blue
}

for (let index = 0; index < games.length; index++) {
  console.log(`Game ${index + 1} total power is ${getGamePower(games[index])}`)
  validGamesSum += getGamePower(games[index])
}

console.log(`Sum of IDs of valid games: ${validGamesSum}`)