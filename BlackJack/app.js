$(() => {
  console.log('hi');

  const card = (suit, number) => {
      let suitName = suit,
          cardName = number;
      }


  const symbol = () => {
      let = suitName = ' ';
      switch (suit) {
        case 1:
          suitName = '&diams;';
          break;
        case 2:
          suitName = '&hearts;';
          break;
        case 3:
          suitName = '&spades;';
          break;
        case 4:
          suitName = '&clubs;';
          break;
        }
      return suitName;
      }


    const name = () => {
      let cardName = ' ';
      switch (number){
        case 1:
        cardName = "A";
        break;
        case 13:
        cardName = "K";
        break;
        case 12:
        cardName = "Q";
        break;
        case 11:
        cardName = "J";
        break;
        default:
        cardName = number;
        break;
      }
      return cardName;
    }


    const values = () => {
        let value = number;
          if(number >= 10) {
            return 10;
          }
          else if(number === 1){
            return 11;
          }
          return value;
      }



    const deck = () => {
      let decks = [];

      for (let i = 0; i <= 52; i++) {
          decks.push(i);
      }
      this.shuffle = () => {
        let i, j, x;

        for (i = decks.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);

            x = decks[i];
            decks[i] = decks[j];
            decks[j] = x;
        }
      }
    }

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
            output.push(playerHand[i].getValue() + "of" + playerHand[i].getSymbol());
          }
      }
  }


  let $deal  = $('.deal'),
      $hit   = $('.hit'),
      $stand = $('.stand');



  $deal.on('click', () => {

  })
  $hit.on('click', () => {
    console.log('yo');
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



$('.playercards').append('\u2661').css('color', 'red');
console.log($('.playercards'));
$('.playercards').append('\u2664')
console.log($('.playercards'));
$('.playercards').append('\u2662');
console.log($('.playercards'));
$('.playercards').append('\u2667');
console.log($('.playercards'));



});
