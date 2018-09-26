$(() => {
  console.log('hi');

  const card = (suit, number) => {
      this.getNumber = () => {
        return number;
      }
  }

  const suit = () => {
      card.getSuit = () => {
        let = suitName = ' ';
        switch (suit) {
          case 1:
            suitName = 'Diamonds';
            break;
          case 2:
            suitName = 'Hearts';
            break;
          case 3:
            suitName = 'Spades';
            break;
          case 4:
            suitName = 'Clubs';
            break;
      }
      return suitName;
    }
  }

  const symbol = () => {
    card.getSymbol = () => {
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
    }

    const values = () => {
      card.getValue = () => {
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
    return cardName+card.getSymbol();
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
      for (let j, x, i = cards.length; i; j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
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
});
