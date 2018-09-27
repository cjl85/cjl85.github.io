$(() => {
  console.log('hi');

  const card = (suit, number) => {
      this.getNumber = () => {
        return number;
      }
  }

  // const suit = () => {
  //     this.getSuit = () => {
  //       let = nameOfSuit = ' ';
  //       switch (suit) {
  //         case 1:
  //           nameOfSuit = 'Diamonds';
  //           break;
  //         case 2:
  //           nameOfSuit = 'Hearts';
  //           break;
  //         case 3:
  //           nameOfSuit = 'Spades';
  //           break;
  //         case 4:
  //           nameOfSuit = 'Clubs';
  //           break;
  //     }
  //     return nameOfSuit;
  //   }
  // }

  const symbol = () => {
    this.getSymbol = () => {
      let = nameOfSuit = ' ';
      switch (suit) {
        case 1:
          nameOfSuit = '&diams;';
          break;
        case 2:
          nameOfSuit = '&hearts;';
          break;
        case 3:
          nameOfSuit = '&spades;';
          break;
        case 4:
          nameOfSuit = '&clubs;';
          break;
        }
      return nameOfSuit;
      }
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
      return cardName + this.getSymbol();
    }


    const values = () => {
      this.getValue = () => {
        let value = number;
          if(number >= 10) {
            return 10;
          }
          else if(number === 1){
            return 11;
          }
          return value;
      }
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



  $deal.on('click', ()=> {
    console.log('what');
  })
  $hit.on('click', () => {
    console.log('yo');
  })
  $stand.on('click', () => {
    console.log('ma');
  })

  let showDeal = () => {
      $hit.hide();
      $stand.hide();
      $deal.show();
  }

  let showHitStay = () => {
      $hit.show();
      $stand.show();
      $deal.hide();
  }
// showDeal();

$('.playercards').append('\u2661');
console.log($('.playercards'));

});
