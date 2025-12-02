import input from "./input.js"

const lines = input.trim().split('\n');

let dialPosition = 50;
let zeroCount = 0;

for (const line of lines) {
  const direction = line[0];
  const amount = parseInt(line.slice(1));

  let newPosition;
  let passCount = 0;

  if (direction === 'L') {
    newPosition = ((dialPosition - amount) % 100 + 100) % 100;

    if (dialPosition === 0) {
      passCount = Math.floor(amount / 100);
    } else if (amount < dialPosition) {
      passCount = 0;
    } else {
      passCount = 1 + Math.floor((amount - dialPosition) / 100);
    }
  } else if (direction === 'R') {
    newPosition = (dialPosition + amount) % 100;

    if (dialPosition === 0) {
      passCount = Math.floor(amount / 100);
    } else {
      const clicksToZero = 100 - dialPosition;
      if (amount < clicksToZero) {
        passCount = 0;
      } else {
        passCount = 1 + Math.floor((amount - clicksToZero) / 100);
      }
    }
  }

  zeroCount += passCount;
  dialPosition = newPosition;
}

console.log(`Password: ${zeroCount}`);
