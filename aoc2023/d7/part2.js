import input from "./example2.js"

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

const scoreOrder = { A: 14, K: 13, Q: 12, J: 11, T: 10 }

const cardScoreValue = {
  A: 14, K: 13, Q: 12, T: 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2, J: 0
}
const gameData = input.split("\n")
const hands = gameData.map(handStr => {
  const [hand, bet] = handStr.split(" ")
  return {
    hand, bet: parseInt(bet), handStrength: getHandStrength(hand)
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

function getPossibleHands(cardCounts) {
  let possibleHands = []

  // for J in 

}

function getHandStrengthFromCounts(cardCounts) {
  console.log("card counts", cardCounts)
  const countArray = Object.values(cardCounts).sort((a, b) => b - a);
  console.log("Sorted Card Array", countArray)

  for (const cardCount of countArray) {
    if (cardCount === 5) {
      return handStrength["Five of a kind"];
    }
    if (cardCount === 4) {
      return handStrength["Four of a kind"];
    }
    if (cardCount === 3) {
      if (Object.keys(cardCounts).length === 2) {
        return handStrength["Full house"];
      }
      return handStrength["Three of a kind"];
    }
    if (cardCount === 2) {
      if (Object.keys(cardCounts).length === 3) {
        return handStrength["Two pair"];
      }
      return handStrength["One pair"];
    }
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

function getHandStrength(handStr) {
  const cardCounts = getCardCounts(handStr);
  return getHandStrengthFromCounts(cardCounts);
}

function getWinnings(hands) {
  return hands.reduce((totalValue, hand, i) => {
    return totalValue += hand.bet * (i + 1)
  }, 0)
}