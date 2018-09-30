const $blackJack = () => {
};

  checkWinner = () => {
    if(user.record === 5) {
        alert('You Win')
    } else if (dealer.record === 5){
        alert('Dealer Wins')
    }
  }
  end = () => {
    if(dealerPoints < 17){
      deck1.deal();
      $stand();
    } else if (dealerPoints > 21){
      alert('Dealer has busted')
    } else if (dealerPoints === userPoints){
      alert('Tie game')
    } else if (dealerPoints < userPoints){
      alert('Dealer Loses')
    } else if (dealerPoints > userPoints){
      alert('Dealer Wins')
    }
  }

class Player {
  constructor(name, record) {
      this.name   = name;
      this.record = 0;
  }
}
const user = new Player('Bob');
console.log(user);


class Hand {
  constructor() {

  }
}

class Game {
  constructor(inProgress) {
    this.inProgress = false;
    this.dealerHand = new Hand();
    this.playerHand = new Hand();

  }
  isInProgress() {
    return this.inProgress;
  }
}

// let card = (point) => {
//   this.points = point;
//   return {
//     point: this.points
//   }
// }
const game = new Game();


class Deck {
  constructor () {
      this.deck = [];
      this.drawnCards = [];

      this.points = [];


    let suits = ['♦','♣','♥','♠'];
    let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

            for (let suit in suits) {
              for (let value in values) {
                this.deck.push(`${values[value]}${suits[suit]}`);
                  let points = parseInt(values[value]);
                    if (values[value] === 'J' || values[value] === 'Q' || values[value] === 'K')
                      points = 10;
                    if (values[value] === 'A')
                      points = 11;
                  this.points.push(points)
              }
            }
          }
          printDeck () {
            if(!this.deck.length){
                console.log('Need new deck');
          } else {
              for (let i = 0; i < this.deck.length; i++) {
                  console.log(this.deck[i]);
              }
            }
          }
          shuffle() {
            const deck = this.deck;
              let m = deck.length, i;

                while(m){
                  i = Math.floor(Math.random() * m--);

                    [deck[m], deck[i]] = [deck[i], deck[m]];
                }

                return this;
            }
            deal () {
                let drawnCard = this.deck.shift()
                    this.drawnCards.push(drawnCard)

                    return drawnCard
                }
          };

            const deck1 = new Deck();
            console.log(deck1.printDeck());
            deck1.shuffle();
            // console.log(deck1.printDeck());
            // console.log(deck1.deal());



        $(() => {
          const $deal = () => {
            deck1.deal();
            deck1.deal();
            console.log(deck1.deal());
          }
          const $hit = () => {
            deck1.deal();
          }
          const $stand = () => {
            end();
          }

              $('.deal').on('click', () => {
              if(game.isInProgress()) {
                  return;
              }

              $('.playercards:nth-child(-n+2)').css('visibility', 'visible');
              $('.dealerhand:nth-child(-n+2)').css('visibility', 'visible');

              $('.playercards:nth-child(n+3)').css('visibility', 'hidden');
              $('.dealerhand:nth-child(n+3)').css('visibility', 'hidden');

              $('.playercards:nth-child(1)').text(deck1.deal());
              $('.playercards:nth-child(2)').text(deck1.deal());

              $('.dealerhand:nth-child(1)').text(deck1.deal());
              $('.dealerhand:nth-child(2)').text(deck1.deal());



            })
              $('.hit').on('click', () => {
                $('.playercards:nth-child(3)').css('visibility', 'visible');
                $('.playercards:nth-child(3)').text(deck1.deal());
              })
              $('.stand').on('click', () => {
                $('.dealerhand:nth-child(3)').css('visibility', 'visible');
                $('.dealerhand:nth-child(4)').css('visibility', 'visible');

              })
        });































































// $(() => {
//   console.log('hi');
//   // Defined a class of deck
//   // Assigned suits/values into variables
//
  // class Deck {
  //   constructor() {
  //     this.deck = [];
  //     this.drawnCards = [];
  //     this.userHand = [];
  //     this.dealerHand = [];
  //
  //     const suits = ['♦','♣','♥','♠'];
  //     const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
//
//     //   const $suits = ['♦','♣','♥','♠']
//     //
//     //   for (let i = 0; i < $suits.length; i++) {
//     //     if ($suits === '♦' || $suits ==='♥') {
//     //     $suits.css('red');
//     //   }
//     // }
//
//         // Ran a for - in loop to iterate over array and
//         // add each value to a suit.
//
//         // Not sure why a for - in loop works in this case
//         // as opposed to a for - of loop.
//
//         // For - in  loop generally works on properties of an object in an arbitrary order.
//         // For - of loops generally used for arrays that have order of access importance.
//
//         for (let suit in suits) {
//           for (let value in values) {
//             this.deck.push(`${values[value]}${suits[suit]}`);
//               let points = parseInt(values[value]);
//                 if (values[value] === 'J' || values[value] === 'Q' || values[value] === 'K')
//                   points = 10;
//                 if (values[value] === 'A')
//                   points = 11;
//           }
//         }
//       }
//       printDeck () {
//         if(!this.deck.length){
//           console.log('Need new deck');
//         } else {
//           for (let i = 0; i < this.deck.length; i++) {
//               console.log(this.deck[i]);
//           }
//         }
//       }
//
//       // Used Fisher-Yates shuffle to randomize card selection
//
//       // Assigned this.deck to the variable deck
//       // Assigned m to deck length and also defined i
//
//       // While there are remaining elements to shuffle
//
//       // Choose a random remaining element
//
//       // Swap it with the current element
//
//       shuffle() {
//         const deck = this.deck;
//         let m = deck.length, i;
//
//         while(m){
//           i = Math.floor(Math.random() * m--);
//
//           [deck[m], deck[i]] = [deck[i], deck[m]];
//         }
//
//         return this;
//       }
//
//       // Deal method
//
//       // Iterate through the array
//       // Take a card out of the deck and store into variable
//
//       // Push that card into drawncards array defined at top
//
//       deal () {
//           let m = Array.length;
//
//         for (let i = 0; i <= m; i++) {
//               let drawnCard = this.deck.shift()
//               this.drawnCards.push(drawnCard)
//             }
//             return this.drawnCards
//           }
//
//         }
//       const $hit = () => {
//           deck.deal();
//       }
//
//
//       // stand () {
//       //
//       // }
//
//
//
//
//         const deck1 = new Deck();
//         console.log(deck1.deck);
//         // deck1.printDeck();
//         deck1.shuffle();
//         deck1.deal();
//         console.log(deck1.deal());
//
//         $('.deal').on('click', () => {
          // $('.playercards:nth-child(-n+2)').css('visibility', 'visible');
          // $('.dealerhand:nth-child(1)').css('visibility', 'visible');
          // $('.dealerhand:nth-child(2)').css('visibility', 'visible');
          //
          // $('.playercards:nth-child(1)').append(deck1.drawnCards[0]);
          // $('.playercards:nth-child(2)').append(deck1.drawnCards[1]);
          //
          // $('.dealerhand:nth-child(1)').append(deck1.drawnCards[2]);
          // $('.dealerhand:nth-child(2)').append(deck1.drawnCards[3]);
//         })
//         $('.hit').on('click', $hit().css('visibility', 'visible'))
//         $('.stay').on('click', )


        // $deal.on('click', () => {
        //
        // })
        //
        // $hit.on('click', () => {
        //     $('.playercards:nth-child(3)').css('visibility', 'visible');
        //     $('.playercards:nth-child(3)').append(deck1.drawnCards[2]);
        //     // $('.playercards:nth-child(4)').css('visibility', 'visible');
        //     // $('.playercards:nth-child(4)').append(deck1.drawnCards[3]);
        // })
        //
        // $stand.on('click', () => {
        //   console.log('Stay');
        // })
  // });

// TO DOS

// Assign appropriate points to cards and have that be added up in the Total (Represents Player's total value of cards)
// Deal both to player and computer (Currently only player's card shown)
// Compare the 2 total values and determine who won
// Keep track of wins and losses in the record box

// Ability to Double Down/Split


// BUGS TO FIX

// Make either deal button disppear on click or not able to click deal after clicking once until round is over
// Same for the hit button, not allow the user to continue clicking button after no more options
// Add appropriate color to suits






















  //   const hand = (deck) => {
  //     let playerHand = [];
  //
  //     this.push(deck.deal(), deck.deal());
  //
  //     this.gethand = () => {
  //         return playerHand;
  //     }
  // }
  //
  //   const score = () => {
  //     let i, x;
  //     let sum = 0;
  //     let aces = 0;
  //     for (let i = 0; i < playerHand.length; i++) {
  //         x = playerHand[i].getValue();
  //         if (x === 11) {
  //             aces++;
  //             sum++;
  //         }
  //         else { sum += x;}
  //     }
  //     while (sum < 21 && aces > 0) {
  //         if (sum + 10 <= 21) {
  //             sum += 10;
  //             aces--;
  //         }
  //         return sum;
  //     }
  //
  //     const printHand = () => {
  //         let output = [];
  //         for (let i = 0; i < playerHand.length; i++) {
  //           output.push(playerHand[i].value() + "of" + playerHand[i].getSymbol());
  //         }
  //     }
  // }
  //
  //


  // let showDeal = () => {
  //     $hit.hide();
  //     $stand.hide();
  //     $deal.show();
  // }
  //
  // let showHitStay = () => {
  //     $hit.show();
  //     $stand.show();
  //     $deal.hide();
  // }

  // $(document).ready = () => {
  //       $deal.on('click') =>{
  //         $deal.show();
  //     });
  // });

// Defined variables for each playercard Class
// Appended each symbol

// const $heart = $('.playercards').append('\u2661').css('color', 'red');
// console.log($('.playercards'));
// const $spade = $('.playercards').append('\u2664')
// console.log($('.playercards'));
// const $diamond = $('.playercards').append('\u2662');
// console.log($('.playercards'));
// const $clubs = $('.playercards').append('\u2667');
// console.log($($clubs));
//
// $heart.css('visibility', 'hidden');
// $spade.css('visibility', 'hidden');
// $diamond.css('visibility', 'hidden');
// $clubs.css('visibility', 'hidden');





// let $playerCards = $('.playerCards'),
//     $total       = $('.total'),
//     playerCards;
//
// let updateUI = function (){
//      /* Cards */
//      $playerCards.html(playerCards.toHtml());
//      /* Score */
//      $total.find(".digits").html(yourHand.score());
//      $("#wins").text(wins);
//      $("#losses").text(losses);
//  };
//  updateUI();
