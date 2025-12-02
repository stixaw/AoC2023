import input from "./input.js"

const lines = input.trim().split('\n');

let dialPosition = 50;
let zeroCount = 0;

for (const line of lines) {
  const direction = line[0];
  const amount = parseInt(line.slice(1));

  if (direction === 'L') {
    dialPosition = ((dialPosition - amount) % 100 + 100) % 100;
  } else if (direction === 'R') {
    dialPosition = (dialPosition + amount) % 100;
  }

  if (dialPosition === 0) {
    zeroCount++;
  }
}

console.log(`Password: ${zeroCount}`);
