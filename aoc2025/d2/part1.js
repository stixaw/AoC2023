import input from "./input.js"

// Function to check if a number is made of a sequence repeated twice
function isRepeatedPattern(num) {
  const str = num.toString();
  const len = str.length;

  // Must be even length to be repeated twice
  if (len % 2 !== 0) return false;

  const halfLen = len / 2;
  const firstHalf = str.substring(0, halfLen);
  const secondHalf = str.substring(halfLen);

  // Check if first half equals second half
  // Also check that first half doesn't have leading zeros
  return firstHalf === secondHalf && firstHalf[0] !== '0';
}

// Parse input - join lines since ranges are wrapped
const rangesStr = input.split('\n').join('');
const ranges = rangesStr.split(',').map(range => {
  const [start, end] = range.split('-').map(Number);
  return { start, end };
});

let totalSum = 0;

// Check each range for invalid IDs
ranges.forEach(({ start, end }) => {
  for (let id = start; id <= end; id++) {
    if (isRepeatedPattern(id)) {
      console.log(`Found invalid ID: ${id}`);
      totalSum += id;
    }
  }
});

console.log(`\nTotal sum of invalid IDs: ${totalSum}`);
