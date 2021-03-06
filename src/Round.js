const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck, game) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
    this.game = game;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    !turn.evaluateGuess() && this.incorrectAnswers.push(this.returnCurrentCard().id);
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectAnswers.length) / this.turns * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.calculatePercentCorrect() < 90 ? this.game.start(prototypeQuestions) : console.log(`A job well done!`);
  }
}


module.exports = Round;