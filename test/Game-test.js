const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  });

  it('should be a instance of Game', () => {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });
});