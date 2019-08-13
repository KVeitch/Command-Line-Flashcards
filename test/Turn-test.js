const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

var card, turn, turn1, turn2

beforeEach(() => {
  card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
  turn = new Turn();
  turn1 = new Turn('object', card)
  turn2 = new Turn('array', card)
})

describe('Turn', function () {
  
  it('should be a function', function () {  
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () { 
    expect(turn).to.be.an.instanceof(Turn);
  }); 
  
  it('should take a guess', function () {
    expect(turn2.guess).to.equal('array')
  });

  it('should store a card', function () { 
    expect(turn2.card).to.deep.equal(card);
  });

  it('should return a guess', function () {  
    expect(turn2.returnGuess()).to.equal('array')
  });

  it('should return a card', function () {
    expect(turn2.returnCard()).to.deep.equal(card);
  });

  it('should return true if correct answer is guessed', function () {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('if the correct answer is guessed then it should give you feedback', function () {
    expect(turn1.giveFeedback()).to.equal('Correct!');
    expect(turn2.giveFeedback()).to.equal('Sorry, that was incorrect.');
  });
});