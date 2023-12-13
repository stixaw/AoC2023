import input from "./input.js"


/* Description: toy boat race
example:
Time:      7  15   30
Distance:  9  40  200

The first boat takes 7 seconds to travel 9 meters, so it is traveling at a speed of 9/7 meters per second. 
the

Since the current record for this race is 9 millimeters, 
there are actually 4 different ways you could win: 
you could hold the button for 2, 3, 4, or 5 milliseconds at the start of the race.

To see how much margin of error you have, determine the number of ways you can beat the record in each race; in this example, 
if you multiply these values together, you get 288 (4 * 8 * 9).

Determine the number of ways you could beat the record in each race. What do you get if you multiply these numbers together?
*/
const raceData = input.split("\n")

function waysToWin() {
  let totalWaysToWin = 1
  let times = []
  let recordDistance = []
  let pattern = /(\d+)/g
  let match

  while (match = pattern.exec(raceData[0])) {
    times.push(parseInt(match[0]))
  }

  while (match = pattern.exec(raceData[1])) {
    recordDistance.push(parseInt(match[0]))
  }

  for (let timeNum = 0; timeNum < times.length; timeNum++) {
    let waysToWin = 0
    for (let buttonLength = 0; buttonLength < times[timeNum]; buttonLength++) {
      if ((times[timeNum] - buttonLength) * buttonLength > recordDistance[timeNum]) {
        waysToWin++
      }
    }
    totalWaysToWin *= waysToWin
  }
  return totalWaysToWin
}
console.log(`Ways to Win part 1: ${waysToWin()}`)
