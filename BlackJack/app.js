$(() => {
  console.log('hi');

  class Deck {
    constructor() {
      this.deck = [];

      const suits = ['♦','♣','♥','♠'];
      const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  }
  const deck1 = new Deck();
  console.log(deck1.deck);


  // const shuffle = () => {
  //
  //   }
  // }

// deck1.deck.shuffle();



    const hand = (deck) => {
      let playerHand = [];

      this.push(deck.deal(), deck.deal());

      this.gethand = () => {
          return playerHand;
      }
  }

    const score = () => {
      let i, x;
      let sum = 0;
      let aces = 0;
      for (let i = 0; i < playerHand.length; i++) {
          x = playerHand[i].getValue();
          if (x === 11) {
              aces++;
              sum++;
          }
          else { sum += x;}
      }
      while (sum < 21 && aces > 0) {
          if (sum + 10 <= 21) {
              sum += 10;
              aces--;
          }
          return sum;
      }

      const printHand = () => {
          let output = [];
          for (let i = 0; i < playerHand.length; i++) {
            output.push(playerHand[i].value() + "of" + playerHand[i].getSymbol());
          }
      }
  }


  let $deal  = $('.deal'),
      $hit   = $('.hit'),
      $stand = $('.stand');



  $deal.on('click', () => {
      $('.playercards:nth-child(-n+2)').css('visibility', 'visible');
  })
  $hit.on('click', () => {
      $('.playercards:nth-child(3)').css('visibility', 'visible');

  })
  $stand.on('click', () => {
    console.log('ma');
  })

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



});
