// Define 2 arrays with the suits and values of the deck.
// Define empty deckOfCards array to store cards later.
// Define suit and value.
// Define an object with the points for face cards.

// For now, Aces will only take in a point value of 11.

let suits = ["♦", "♣", "♥", "♠"],
    values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
    deckOfCards = [],
    suit,
    value,
    points = { A: 11, J: 10, Q: 10, K: 10 },
    playerHand = [],
    dealerHand = [];

///////////////////////////////////////////////////////////
//  MAKE A DECK THAT HAS 52 CARDS W/ SUITS/VALUES/POINTS //
///////////////////////////////////////////////////////////

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
//                DEAL 2 CARDS TO EACH SIDE                 //
//////////////////////////////////////////////////////////////
for (let i = 0; i < 2; i++) {
    playerHand.push(dealRandomCard());
    dealerHand.push(dealRandomCard());
}
// console.log(playerHand);
// console.log(dealerHand);

//////////////////////////////////////////////////////////////
//           ASSIGN POINTS TO EACH SIDE TO BE ADDED         //
//////////////////////////////////////////////////////////////

let playerPoints = 0,
    dealerPoints = 0;

  for (let { points } of playerHand) {
        playerPoints += points;
  }

  for (let { points } of dealerHand) {
        dealerPoints += points
  }
console.log(playerPoints);
console.log(dealerPoints);

/////////////////////////////////////////////////////////////
//         ADD EXTRA CARD TO DEALER IF LESS THAN 17        //
/////////////////////////////////////////////////////////////

let totalPoints = 0;

while (dealerPoints < 17) {
    dealerHand.push(dealRandomCard());
    dealerPoints += points
    totalPoints = dealerPoints
}

/////////////////////////////////////////////////////////////
//             ADD TOTAL POINTS FOR DEALER                 //
/////////////////////////////////////////////////////////////


totalPoints += points;

totalPoints = dealerHand.reduce((total , card) => total + card.points, 0);


console.log(playerHand);
console.log(dealerHand);
console.log(totalPoints);


let name = "Player";

if(totalPoints > 21 || playerPoints > 21){
  console.log(`${name} LOST!`);
} else if (playerPoints > totalPoints && playerPoints <= 21) {
  console.log('Player Wins!');
} else if (playerPoints === totalPoints) {
  console.log('Push!');
}



$(() => {

  let $playerPoints = playerPoints;
  let $totalPoints  = totalPoints;
  let $playerHand   = playerHand;
  let $dealerHand   = dealerHand;

  $('.hit').hide()
  $('.stand').hide()
  $('.reset').hide()


  $('.deal').on('click', () => {

      const $firstCard   = '<div class = playerhand > </div>';
      const $secondCard  = '<div class = playerhand > </div>';

      $('.gamebox').append($firstCard)
      $('.gamebox').append($secondCard)
      $('.deal').hide()
      $('.hit').toggle()
      $('.stand').toggle()
      $('.reset').toggle()

    })

  $('.hit').on('click', () => {

      const $nextCard = '<div class = playerhand > </div>';

      $('.gamebox').append($nextCard);

    })


  $('.stand').on('click', () => {

    const $dealerCard  = '<div class = dealerhand > </div>';

    $('.dealergamebox').each(function() {
      $(this).append($dealerCard)
      $(this).append($dealerCard)
    });

  })


  $('.reset').on('click', () => {

    window.location.reload(false);
  })
});


// let cardDivs = document.getElementsByClassName("playerhand");
// let text = document.createTextNode("This just got added");
// cardDivs.appendChild(text);
//
// console.log(text);
// console.log(cardDivs);
