const newDeck1 = [];
const playerHand = [];
const dealerHand = [];

const suits = ["♦", "♣", "♥", "♠"];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// console.log(Object.entries(deck));
// console.log(deck);
// console.log(points);
for (const suit of suits) {
  for (const value of values) {
    // console.log(suit);
    // console.log(value);
    // console.log(card);


    // console.log(card);
    let points = parseInt(value);
    if(value === "J" || value === "Q" || value === "K") points = 10;
    if(value === "A") points = 11;
    const card = [suit, value, points];
    // console.log(card);
    newDeck1.push(card);
    // console.log(newDeck1);

    let m = newDeck1.length,
        i;

    while(m) {
      i = Math.floor(Math.random() * m--);

      [newDeck1[m], newDeck1[i]] = [newDeck1[i], newDeck1[m]];

    // deal() {
    //   return newDeck1.shift();
    //   }
    }
  }
}


console.log(playerHand);
