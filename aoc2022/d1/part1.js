import input from "./input.js"


const elementsArray = inputString.split('\n')

let totalCalibrationValue = 0

elementsArray.forEach(element => {
    //using regex
    const firstDigit = element.match(/\d/)
    const lastDigit = element.match(/\d(?=\D*$)/)

    const calibrationValue = firstDigit && lastDigit ? parseInt(`${firstDigit[0]}${lastDigit[0]}`, 10) : null

    totalCalibrationValue += calibrationValue

    console.log(`Element: ${element}`);
    console.log(`Calibration Value: ${calibrationValue !== null ? calibrationValue : 'No digit found'}`)
    console.log('---------------------')
})

console.log(`Total Calibration Value: ${totalCalibrationValue}`)
return totalCalibrationValue
