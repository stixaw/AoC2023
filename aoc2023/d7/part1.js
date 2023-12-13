import input from "./input.js"
/**
 * 32T3K is the only one pair and the other hands are all a stronger type, so it gets rank 1.
 * KK677 and KTJJT are both two pair. Their first cards both have the same label, but the second card of KK677 is stronger (K vs T), so KTJJT gets rank 2 and KK677 gets rank 3.
 * T55J5 and QQQJA are both three of a kind. QQQJA has a stronger first card, so it gets rank 5 and T55J5 gets rank 4.
Now, you can determine the total winnings of this set of hands by adding up the result of multiplying each hand's bid with its rank 
(765 * 1 + 220 * 2 + 28 * 3 + 684 * 4 + 483 * 5). So the total winnings in this example are 6440.
*/

const gameData = input.split("\n")
const hands = gameData.map(handStr => {
  const [hand, bet] = handStr.split(" ")
  return { hand, bet: parseInt(bet), handStrength: getHandStrength(hand) }
})
sortHandStrength(hands)
console.log(getWinnings(hands))

//everything below here is a helper function
function getHandStrength(handStr) {
  //keeping order from left to right
  const handStrength = {
    "Five of a kind": 7,
    "Four of a kind": 6,
    "Full house": 5,
    "Three of a kind": 4,
    "Two pair": 3,
    "One pair": 2,
    "High card": 1
  }
  const cards = handStr.split("")
  const cardCounts = {}

  for (const card of cards) {
    cardCounts[card] = cardCounts[card] ? cardCounts[card] + 1 : 1
  }
  const countArray = Object.values(cardCounts).sort((a, b) => b - a)

  for (const cardCount of countArray) {
    if (cardCount === 5) {
      return handStrength["Five of a kind"]
    }
    if (cardCount === 4) {
      return handStrength["Four of a kind"]
    }
    if (cardCount === 3) {
      if (Object.keys(cardCounts).length === 2) {
        return handStrength["Full house"]
      }
      return handStrength["Three of a kind"]
    }
    if (cardCount === 2) {
      if (Object.keys(cardCounts).length === 3) {
        return handStrength["Two pair"]
      }
      return handStrength["One pair"]
    }
  }
  return handStrength["High card"]
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
      const scoreOrder = { A: 14, K: 13, Q: 12, J: 11, T: 10 }
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

function getWinnings(hands) {
  return hands.reduce((totalValue, hand, i) => {
    return totalValue += hand.bet * (i + 1)
  }, 0)
}