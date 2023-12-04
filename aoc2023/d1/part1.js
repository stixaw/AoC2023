import input from "./input.js"

const elementsArray = input.split('\n')

let totalCalibrationValue = 0

elementsArray.forEach(element => {
  //using regex
  const firstDigit = element.match(/\d/)
  const lastDigit = element.match(/\d(?=\D*$)/)

  const calibrationValue = firstDigit && lastDigit ? parseInt(`${firstDigit[0]}${lastDigit[0]}`, 10) : null

  totalCalibrationValue += calibrationValue
})

console.log(`Total Calibration Value: ${totalCalibrationValue}`)

