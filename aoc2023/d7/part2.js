import input from "./input.js"

/**
 *  J = Joker and its is a wildcard which can be any card
 *  determine best hand available with a J in the mix
 *  example data:
 *  32T3K 765
 *  T55J5 684 
 *  KK677 28 
 *  KTJJT 220 
 *  JJJJJ 0
 *  QQQJA 483
 * 32T3K is still the only one pair; it doesn't contain any jokers, so its strength doesn't increase. 
 * KK677 is now the only two pair, making it the second-weakest hand. 
 * T55J5, KTJJT, and QQQJA are now all four of a kind! T55J5 gets rank 3, QQQJA gets rank 4, 
 * and KTJJT gets rank 5.
 * JJJJJ is now the strongest hand with 5 of a kind with the J = A
 * total winnings = 5905
 */

const handStrength = {
  "Five of a kind": 7,
  "Four of a kind": 6,
  "Full house": 5,
  "Three of a kind": 4,
  "Two pair": 3,
  "One pair": 2,
  "High card": 1
}

const scoreOrder = { A: 14, K: 13, Q: 12, J: 1, T: 10 }

const gameData = input.split("\n")
const hands = gameData.map(handStr => {
  const [hand, bet] = handStr.split(" ")
  return {
    hand, bet: parseInt(bet), handStrength: getPossibleHands(hand)
  }
})
console.log("starting Hands", hands)
sortHandStrength(hands)
console.log(getWinnings(hands))

//everything below here is a helper function
function getCardCounts(handStr) {
  const cards = handStr.split("");
  const cardCounts = {};

  for (const card of cards) {
    cardCounts[card] = cardCounts[card] ? cardCounts[card] + 1 : 1;
  }

  return cardCounts;
}

function getHandStrengthFromCounts(cardCounts) {

  const countArray = Object.values(cardCounts);

  if (countArray.length === 1) {
    return handStrength["Five of a kind"];
  }
  if (countArray.includes(4)) {
    return handStrength["Four of a kind"];
  }
  if (countArray.length === 2) {
    return handStrength["Full house"];
  }
  if (countArray.includes(3)) {
    return handStrength["Three of a kind"];
  }
  if (countArray.length === 3) {
    return handStrength["Two pair"];
  }
  if (countArray.length === 4) {
    return handStrength["One pair"];
  }
  return handStrength["High card"];
}

function sortHandStrength(hands) {
  hands.sort((a, b) => {
    if (a.handStrength < b.handStrength) {
      return -1
    }
    if (a.handStrength > b.handStrength) {
      return 1
    }
    // sort by card strength for hands with the same strength
    if (a.handStrength === b.handStrength) {
      for (let i = 0; i < a.hand.length; i++) {
        let aCard = scoreOrder[a.hand[i]] || +a.hand[i]
        let bCard = scoreOrder[b.hand[i]] || +b.hand[i]

        if (aCard < bCard) {
          return -1
        }
        if (aCard > bCard) {
          return 1
        }
      }
    }
  })
}

function getPossibleHands(handStr) {
  let possibleHands = []
  const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
  if (handStr.includes('J')) {
    for (const card of cards) {
      const newHandStr = handStr.replaceAll('J', card);
      const cardCounts = getCardCounts(newHandStr);
      const handStrength = getHandStrengthFromCounts(cardCounts);
      possibleHands.push(handStrength);
    }
  } else {
    const cardCounts = getCardCounts(handStr);
    const handStrength = getHandStrengthFromCounts(cardCounts);
    possibleHands.push(handStrength);
  }
  possibleHands.sort((a, b) => b - a);

  return possibleHands[0]; // return the hand with the highest strength
}



function getWinnings(hands) {
  return hands.reduce((totalValue, hand, i) => {
    return totalValue += hand.bet * (i + 1)
  }, 0)
}