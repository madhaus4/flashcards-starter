const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
    constructor() {
        this.currentRound = {};
    }

    start(round) {
        const newCards = prototypeQuestions.map(card => new Card(
            card.id,
            card.question,
            card.answers,
            card.correctAnswer
        ));
        const deck = new Deck(newCards);
        this.currentRound = new Round(deck);

        this.printMessage(deck, round);
        this.printQuestion(round);
    }

    printMessage(deck, round) {
        console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    }

    printQuestion(round) {
        util.main(round);
    }
}

module.exports = Game;