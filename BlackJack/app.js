console.log('hi');
$(() => {
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

const deal = (event) => {
  console.log('deal');
}

const boxes = $('.box')
  let count = boxes.length;
    while(count--){
      const $box = $(boxes[count]);
      $box.on('click', deal)
      }

const bet = () => {
  let betAmount = $(['.chip1', '.chip2', '.chip3'])
    let chipArr = betAmount.length;
    console.log('hi');
      while(chipArr--) {
        switch(betAmount) {
          case $('.chip1'):
            console.log(5);
            break;
          case $('.chip2'):
            console.log(25);
            break;
          case $('.chip3'):
            console.log(100);
            break;
    }   
  }
}
// console.log('hi');
const chips = $(['.chip1', '.chip2', '.chip3'])
  let count1 = chips.length;
    while(count1--) {

    const $chip = $(chips[count1]);
    // $('footer').append($chip)
    console.log('here', $chip);
    $chip.on('click', bet);
    console.log('here', $chip);
    }
};

// shuffle(deck1);

  $BlackJack();
});
