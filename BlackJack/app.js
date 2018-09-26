$(() => {
  console.log('hi');

  const card = (suit, number) => {
      this.getNumber = () => {
        return number;
      }
  }

  const suit = () => {
      this.getSuit = () => {
        let = nameOfSuit = ' ';
        switch (suit) {
          case 1:
            nameOfSuit = 'Diamonds';
            break;
          case 2:
            nameOfSuit = 'Hearts';
            break;
          case 3:
            nameOfSuit = 'Spades';
            break;
          case 4:
            nameOfSuit = 'Clubs';
            break;
      }
      return nameOfSuit;
    }
  }

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

    const values = () => {
      this.getValue = () => {
        let value = number;
          if(number >= 10) {
            value = 10;
          }
          else if(number === 1){
            value = 11;
          }
          return value;
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
    return cardName+this.getSymbol();
    }


    const deck = () => {
      let cards = [];

      let newCards = () => {
        let i, suit, number;
          for (let i = 0; i < 52; i++) {
              suit = i % 4 + 1;
              number = i % 13 + 1;
              cards.push(newCards(suit, number));
          }
          newCards();
      }
    }

    const shuffle = () => {
      for (let j, x, i = cards.length;);
        return this.getCards();
      }

    let $deal  = $('.deal'),
        $hit   = $('.hit'),
        $stand = $('.stand');

    $deal.on('click', ()=> {
      console.log('hi');
    })
    $hit.on('click', () => {
      console.log('yo');
    })
    $stand.on('click', () => {
      console.log('ma');
    })
  values();
});
