import input from "./input.js"
// import input from "./example.js"

/**
 *The Problem Dampener is a reactor-mounted module that lets the reactor safety systems tolerate a single bad level in what would otherwise be a safe report. It's like the bad level never happened!

Now, the same rules apply as before, except if removing a single level from an unsafe report would make it safe, the report instead counts as safe.

More of the above example's reports are now safe:

7 6 4 2 1: Safe without removing any level.
1 2 7 8 9: Unsafe regardless of which level is removed.
9 7 6 2 1: Unsafe regardless of which level is removed.
1 3 2 4 5: Safe by removing the second level, 3.
8 6 4 4 1: Safe by removing the third level, 4.
1 3 6 7 9: Safe without removing any level.
Thanks to the Problem Dampener, 4 reports are actually safe!
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
    return
  } else{
    for (let i = 0; i < row.length; i++) {
      const rowCopy = [...row]
      rowCopy.splice(i, 1)
      if (checkRowSequence(rowCopy)) {
        safe++
        return
      }
    }
  }
})

//Part II



console.log(`safe: `, safe)