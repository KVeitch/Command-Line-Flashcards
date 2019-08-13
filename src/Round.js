const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
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