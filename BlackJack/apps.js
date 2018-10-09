
const newDeck1 = [];

const suits = ["♦", "♣", "♥", "♠"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// console.log(Object.entries(deck));
// console.log(deck);

for (let suit of suits) {
  for(let value of values) {
    console.log(suit);
    console.log(value);

    // newDeck1.push(card);
    // console.log(newDeck1);
  }
  // console.log(card);
}
