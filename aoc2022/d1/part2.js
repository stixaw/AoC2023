import input from "./input.js"


const elves = input.split('\n\n').map(elf => elf.split('\n').map(Number))

const calories = elves.map(elf => {
    const value = elf.reduce(
        (total, value) => total + value, 0)
    return value
})

console.log("Calories", calories, calories.length)
// let high = 0
// for (let i = 0; i < calories.length; i++) {
//     if (calories[i] > high) {
//         high = calories[i]
//     }
//     console.log("This is high:", high, i)
// }

calories.sort((a, b) => b - a)

let topElves = calories.slice(0, 3).reduce(
    (total, value) => total + value, 0)
console.log(topElves)