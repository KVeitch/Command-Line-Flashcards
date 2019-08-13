const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

var card1, card2, card3, deck, round;
beforeEach(() => {
  card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
  card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
  card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
  deck = new Deck([card1, card2, card3])
  round = new Round(deck);
});

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should have a deck of cards', function() {
    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should be able to takeTurn', function() {
    expect(round.takeTurn).to.be.a('function')
  })

  it('should count turns taken', function () {
    expect(round.turns).to.be.equal(0);
    round.takeTurn();
    expect(round.turns).to.be.equal(1)
  });

  it('should store an incorrect Answer', function () {
    expect(round.incorrectAnswers).to.deep.equal([]);
    expect(round.takeTurn('capybara')).to.deep.equal('Sorry, that was incorrect.');
    expect(round.incorrectAnswers.length).to.equal(1);
    expect(round.incorrectAnswers[0]).to.equal(1);
  });

  it('should change cards after a answer is given', function () {
    expect(round.takeTurn('capybara')).to.deep.equal('Sorry, that was incorrect.');
    expect(round.takeTurn('gallbladder')).to.deep.equal('Correct!');
  });

  it.only('should give a percentage of correct answers for a round', function () {
 
    round.takeTurn('capybara')
    round.takeTurn('gallbladder')
    round.takeTurn('listening to music')
    round.calculatePercentCorrect();
  
    expect(round.calculatePercentCorrect()).to.equal(33)
  });





})