import input from "./input.js"
// import input from "./example.js"

/**
 * Determine if the elementArrays are safe
 * safe = numbers in the elementArrays is decreasing by 1 or 2
 * safe = numbers in the elementArrays is increasing by 1, 2 or 3
 * results are the number of safe elementArrays
 */

const checkRowSequence = (row) => {
  const isIncreasing = row[1] > row[0]
  const isDecreasing = row[1] < row[0]

  for (let i = 1; i < row.length; i++) {
    const diff = row[i] - row[i - 1]

    if(Math.abs(diff) < 1 || Math.abs(diff) > 3) {
    return false
    }

    if (isIncreasing && diff <= 0) return false
    if (isDecreasing && diff >= 0) return false
  }
  return true
}

const elementArrays = input.split('\n').map((row) => row.split(' ').map((element) => parseInt(element)))

let safe = 0
elementArrays.forEach((row) => {
  if (checkRowSequence(row)) {
    safe++
  }
})
console.log(`safe: `, safe)

