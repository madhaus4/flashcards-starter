const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.numOfTurns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);

        if (!turn.evaluateGuess(guess)) {
            this.incorrectGuesses.push(this.currentCard.id)
        } else {
            this.correctGuesses += 1;
        }

        this.numOfTurns += 1;
        this.currentCard = this.deck.cards[this.numOfTurns];
        return turn.giveFeedback(guess);
    }

    calculatePercentCorrect() {
        let percentage = (this.correctGuesses / this.numOfTurns) * 100;
        return Math.round(percentage);
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
}


module.exports = Round;