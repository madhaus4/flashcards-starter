const chai = require('chai');
const expect = chai.expect;

// const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let cards, deck, round, game;

    beforeEach(() => {
        deck = new Deck([cards]);
        round = new Round(deck);
        game = new Game();
    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should be able to keep track of the current round', () => {
        expect(game.currentRound).to.deep.equal({});
    });

    it('should instanciate cards when  game starts', () => {
        game.start(round);
        expect(game.start).to.be.a('function');
    });
});