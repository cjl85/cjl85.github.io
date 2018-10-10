// Define 2 arrays with the suits and values of the deck.
// Define empty deckOfCards array.
// Define suit and value.
// Define an object with the points for face cards.

// For now, Aces will only take in an point value of 11.

let suits = ["♦", "♣", "♥", "♠"],
    values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    deckOfCards = [],
    suit,
    value,
    points = { A: 11, J: 10, Q: 10, K:  10 };

///////////////////////////////////////////////////////////////

// Shorthand for-loop to iterate over each array.


// Define a deckOfCards object that stores the suit, value, and points
// after each card is assembled.


for (const suit of suits) {
  for (const value of values) {

    deckOfCards.push({suit, value, points: points[value] || value});


    // const card = deckOfCards.entries(suit, value, points)
    //   console.log(card);
  }
}
const getCard = () => {
  return deckOfCards.splice(Math.floor(Math.random() * deckOfCards.length), 1)[0];
}

console.log(getCard());
// console.log(deckOfCards);
