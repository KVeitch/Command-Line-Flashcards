const chai = require('chai');
const expect = chai.expect;

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