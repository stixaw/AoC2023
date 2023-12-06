import input from "./input.js"

const elementsArray = input.trim().split('\n')

const spelledOutDigits = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

let totalCalibrationValue = 0

// Function to find all matches including overlapping ones
function findAllMatches(string, regex) {
  let match
  let matches = []

  while (match = regex.exec(string)) {
    matches.push(match[0])
    regex.lastIndex = match.index + 1
  }
  return matches
}

elementsArray.forEach(element => {
  const digitMatches = findAllMatches(element, new RegExp(`(\\d|${Object.keys(spelledOutDigits).join("|")})`, "gi"))

  if (digitMatches.length) {
    const firstDigit = spelledOutDigits[digitMatches[0]] || parseInt(digitMatches[0])

    const lastDigit = spelledOutDigits[digitMatches[digitMatches.length - 1]] || parseInt(digitMatches[digitMatches.length - 1])


    const calibrationValue = firstDigit * 10 + lastDigit

    totalCalibrationValue = totalCalibrationValue + calibrationValue
    console.log(`Element: ${element}, digits: ${digitMatches}, calibrationValue: ${calibrationValue}, totalCalibrationValue: ${totalCalibrationValue}`)
  }
})

console.log(`Total Calibration Value: ${totalCalibrationValue}`)