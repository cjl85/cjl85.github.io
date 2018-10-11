// Define 2 arrays with the suits and values of the deck.
// Define empty deckOfCards array to store cards later.
// Define suit and value.
// Define an object with the points for face cards.

// For now, Aces will only take in an point value of 11.

let suits = ["♦", "♣", "♥", "♠"],
    values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    deckOfCards = [],
    suit,
    value,
    points = { A: 11, J: 10, Q: 10, K: 10 },
    playerHand = [],
    dealerHand = [];

///////////////////////////////////////////////////////////////

// Shorthand for-loop to iterate over each array
// to get the suit/value for each card.

// Push each assembled card into the deckOfCards array
// that displays the suit, value and corresponding points value of the cards.

// Lines 32 - 37 make 52 assembled cards that are now inside of a deck.

// Lines 39 - 41 is a function that returns one card(object)
// that is going to be randomly chosen.

for (const suit of suits) {
  for (const value of values) {

    deckOfCards.push({suit, value, points: points[value] || value});
  }
}

const dealRandomCard = () => {
  return deckOfCards.splice(Math.floor(Math.random() * deckOfCards.length), 1)[0];
}

// console.log(dealRandomCard());

//////////////////////////////////////////////////////////////

for (let i = 0; i < 2; i++) {
    playerHand.push(dealRandomCard());
    dealerHand.push(dealRandomCard());
}
console.log(playerHand);
console.log(dealerHand);
