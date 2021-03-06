const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    this.holder = 'hold';
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    // const deck = new Deck(prototypeQuestions.map(x => new Card({...x})));
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck, this);
    this.printMessage(deck);
    this.printQuestion(round);
  }  
}

module.exports = Game;