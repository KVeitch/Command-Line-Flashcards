const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions.map(x => new Card({...x})));
    const round = new Round(deck, this);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }  
}

module.exports = Game;