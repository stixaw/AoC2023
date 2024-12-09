import fs from 'fs'
 
// const input = fs.readFileSync('./example2.txt', 'utf8')
const input = fs.readFileSync('./input.txt', 'utf8')

/**
 *There are two new instructions you'll need to handle:

The do() instruction enables future mul instructions.
The don't() instruction disables future mul instructions.
Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.

For example:

xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) instructions are disabled because there is a don't() instruction before them. The other mul instructions function normally, including the one at the end that gets re-enabled by a do() instruction.

This time, the sum of the results is 48 (2*4 + 8*5).
 */



const regExPattern = /mul\(\d{1,3},\d{1,3}\)/g

const regExPattern2 = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g

const cleanInput = input.match(regExPattern2)
console.log(`cleanInput: `, cleanInput)

let isDo = true

let sum = 0

for (let i = 0; i < cleanInput.length; i++) {
  if (cleanInput[i].includes('do()')) {
    isDo = true
  } else if (cleanInput[i].includes('don\'t()')) {
    isDo = false
  } else if (isDo) {
    const [left, right] = cleanInput[i].match(/\d{1,3}/g)
    sum += left * right
  }

}



console.log(`Sum: `, sum)
