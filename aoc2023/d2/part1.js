import input from "./example1.js"

/** add up the numbers of the games that would have been possible, you get 8.  for exxample1.js
 * each line is a game with multiple rounds
*/

const validCubeCount = {
  red: 12,
  green: 13,
  blue: 14

}

let validGamesSum = 0

function isGamePossible(line) {
  const subgames = line.split(":")[1].split(";");
  for (let subgame of subgames) {
    const cubes = subgame.split(",");
    for (let cube of cubes) {
      const [count, color] = cube.trim().split(" ");
      if (validCubeCount[color] < count) {
        return false;
      }
    }
  }
  return true;
}

const lines = input.split("\n");

for (let index = 0; index < lines.length; index++) {
  if (isGamePossible(lines[index])) {
    console.log(`Game ${index + 1} is possible`);
    validGamesSum += (index + 1);
  }
}


console.log(`Sum of IDs of valid games: ${validGamesSum}`)