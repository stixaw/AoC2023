// import input from "./input.js"
// import input from "./example.js"
import fs from 'fs'
 
const input = fs.readFileSync('./example.txt', 'utf8')
// const input = fs.readFileSync('./input.txt', 'utf8')



/**
 * It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y), 
 * where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. 
 * Similarly, mul(123,4) would multiply 123 by 4. 
 * However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, 
 * even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.
 * For example, consider the following section of corrupted memory:
 * xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
 * Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).
 */

/**
 * This regular expression /mul\(\d{1,3},\d{1,3}\)/g matches strings that follow the 
 * pattern mul(int,int) where each integer is between 1 and 3 digits long. Here's a breakdown:
 * 
 * mul: Matches the literal string "mul".
 * \(: Matches the literal opening parenthesis (.
 * \d{1,3}: Matches between 1 and 3 digits.
 * ,: Matches the literal comma ,.
 * \d{1,3}: Matches between 1 and 3 digits.
 * \): Matches the literal closing parenthesis ).
 * g: Global flag, which means it will find all matches in the input string, not just the first one.
 */



const regExPattern = /mul\(\d{1,3},\d{1,3}\)/g

const cleanInput = input.match(regExPattern)
console.log(`cleanInput: `, cleanInput)

let sum = 0

for (let i = 0; i < cleanInput.length; i++) {
  const [left, right] = cleanInput[i].match(/\d{1,3}/g)
  sum += left * right
}



console.log(`Sum: `, sum)
