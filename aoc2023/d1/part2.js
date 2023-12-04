import input from "./input.js"


const elementsArray = input.split('\n')


const spelledOutDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].reduce((acc, digit, index) => {
  acc[digit] = index + 1
  return acc
}, {})


let totalCalibrationValue = 0

elementsArray.forEach(element => {
  const digitMatches = element.match(new RegExp(`(\\d|${Object.keys(spelledOutDigits).join("|")})`, "gi"));

  if (digitMatches && digitMatches.length >= 2) {
    const firstDigit = spelledOutDigits[digitMatches[0].toLowerCase()] || parseInt(digitMatches[0]);
    const lastDigit = spelledOutDigits[digitMatches[digitMatches.length - 1].toLowerCase()] || parseInt(digitMatches[digitMatches.length - 1]);

    const calibrationValue = firstDigit * 10 + lastDigit;
    totalCalibrationValue += calibrationValue;
  }
});

console.log(`Total Calibration Value: ${totalCalibrationValue}`)