
function getPossibleHands(handStr) {
  let possibleHands = []
  const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

  if (handStr.includes('J')) {
    for (const card of cards) {
      const newHandStr = handStr.replace('J', card);
      const cardCounts = getCardCounts(newHandStr);
      const handStrength = getHandStrengthFromCounts(cardCounts);
      possibleHands.push({ hand: newHandStr, strength: handStrength });
    }
  }

  possibleHands.sort((a, b) => b.strength - a.strength);
  return possibleHands[0]; // return the hand with the highest strength
}