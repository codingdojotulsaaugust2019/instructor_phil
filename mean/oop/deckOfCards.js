// Create a Card class. A card should have the following functionality:
// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    let suitVal;
    let valVal;
    switch (suit) {
      case 0:
        suitVal = "Hearts";
        break;
      case 1:
        suitVal = "Spades";
        break;
      case 2:
        suitVal = "Diamonds";
        break;
      case 3:
        suitVal = "Clubs";
        break;
      default:
        break;
    }
    switch (value) {
      case 1:
        valVal = "Ace";
        break
      case 11:
        valVal = "Jack";
        break
      case 12:
        valVal = "Queen";
        break
      case 13:
        valVal = "King";
        break
      default:
        valVal = value;
        break
    }
    this.strVal = `${valVal} of ${suitVal}`;
  }
  showCard() {
    return this.strVal;
  }
}
// aceOfClubs = new Card(3,1);
// console.log(aceOfClubs.strVal);

// Create a Deck class. A deck should have the following functionality:
class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }
  // The Deck should contain the 52 standard Cards
  // The Deck should be able to reset
  reset() {
    // create the deck
    for (let suit = 0; suit < 4; suit++) {
      for (let value = 1; value < 14; value++) {
        // create a new card, and push to the deck
        this.deck.push(new Card(suit, value));
      }
    }
  }
  // The Deck should be able to shuffle
  shuffle() {
    for(let i = 0; i < this.deck.length; i++) {
      let randInt = Math.floor(Math.random() * this.deck.length);
      let swap = this.deck[randInt];
      this.deck[randInt] = this.deck[i];
      this.deck[i] = swap;
    }
  }
  // The Deck should be able to deal a random Card
  // Deal should return the Card that was dealt and remove it from the Deck
  deal() {
    return this.deck.pop();
  }
  displayDeck() {
    for (let card of this.deck) {
      console.log(card.showCard());
    }
  }
}



// Now create a Player class. A Player should have the following functionality:

class Player {
  constructor(name) {
    // The Player should have a name
    // The Player should have a hand (an array of cards taken from a Deck)
    this.name = name;
    this.hand = [];
  }
  // The Player should be able to take a Card (use the deck.deal method)
  draw(deck) {
    this.hand.push(deck.deal());
  }
  // The Player should be able to discard a Card
  discard(cardIndex) {
    this.hand.splice(cardIndex, 1);
  }
}

let players = ["Jay", "Jaden", "Kevin", "Josh", "Matt"];

let myDeck = new Deck();

let game = [];
// a game with players
for(let player of players) {
  game.push(new Player(player));
}
// give each play 2 cards from the deck
for(let p of game) {
  for(let i = 0; i < 2; i++) {
    p.draw(myDeck);
  }
}
// loop through the players of the game, and display their hand
for(let p of game) {
  console.log(p.name);
  console.log(`\t Hand:`)
  for(let c of p.hand) {
    console.log(`\t\t ${c.showCard()}`);
  }
}