class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.guess === this.card.correctAnswer ? 'Correct!' : 'Sorry, that was incorrect.';
  }
  

}

module.exports = Turn;