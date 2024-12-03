import input from "./input.js"

/**
 * example input
 * `3   4
    4   3
    2   5
    1   3
    3   9
    3   3`
 */

const strSplit = input.split('\n')

const elementsArray = strSplit.map(str => str.split('   '))

const leftArray = elementsArray.map(arr => arr[0])
const rightArray = elementsArray.map(arr => arr[1])

const sortLeftArray = leftArray.sort((a, b) => a - b)
const sortRightArray = rightArray.sort((a, b) => a - b)

let result=0

for (let i = 0; i < sortLeftArray.length; i++) {
  result += Math.abs(sortLeftArray[i] - sortRightArray[i])
}

console.log(`result: `, result)

