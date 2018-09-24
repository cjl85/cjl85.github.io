const $BlackJack = () => {

class Deck {
  constructor() {
    this.deck = [];


    const suits  = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8 , 9 , 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }
}

const deck1 = new Deck();
console.log(deck1);

const shuffle = (deck1) => {
  let foo = this.length, bar, i;
    while (foo) {
    i = Math.floor(Math.random() * foo--);

    let bar = deck1[foo];
    foo[m] = foo[i];
    foo[i] = bar;
  }
  return deck1;
}

  // const flipCard = (event) => {
  //   console.log('hi');
  // }

const box = $('.box')

  for (let i = 0; i < box.length; i++) {


  const $box = $(box[i]);
  $box.on('click', event)
  }

const bet = () => {
  console.log('hi');
}

const circle = $('.circle')
    for (let i = 0; i < circle.length; i++) {

    const $circle = $(circle[i]);
    $('footer').append(circle)
    $circle.on('click', bet);
    }

};

// shuffle(deck1);
$BlackJack();
