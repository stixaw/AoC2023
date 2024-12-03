import input from "./input.js"

const strSplit = input.split('\n')

const elementsArray = strSplit.map(str => str.split('   '))

const leftArray = elementsArray.map(arr => arr[0])
const rightArray = elementsArray.map(arr => arr[1])


/**
 * for any number in left count the number of times it exists in right and
 * multiply left by the number of times found in the right
 */
let results = 0

for (let i = 0; i < leftArray.length; i++) {
  let count = 0
  for (let j = 0; j < rightArray.length; j++) {
    if (leftArray[i] === rightArray[j]) {
      count++
    }
  }
  results += leftArray[i] * count
}
console.log('results', results)