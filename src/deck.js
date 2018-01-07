const Card = require('./card');

const suits = ['club', 'spade', 'heart', 'diamond'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

class Deck {
    constructor(id) {
        this.div = document.getElementById(id);
        this._cards = [];
        this._drawn = [];

        this.addCards();
        this.displayDeck();
    }

    get cards() {
        return this._cards;
    }

    get drawn() {
        return this._drawn;
    }

    // create each card and add to page
    addCards() {
        let i = 0;
        for (let suit of suits) {
            for (let rank of ranks) {
                this._cards.push(new Card(this.div, i, suit, rank));
                i++;
            }
        }
    }

    shuffle() {
        let m = this._cards.length;
        let t, i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this._cards[m];
            this._cards[m] = this._cards[i];
            this._cards[i] = t;
        }

        // play card shuffling animation
        for (let card of this._cards) {
            card.shuffleAnimation();
        }
    }

    getIndex(i) {
        return this._cards.length + (this._drawn.length - i);
    }

    sort() {
        // hide cards and reset position
        let i = 0;
        for (let card of this._drawn) {
            card.rotation = 0;
            card.positionCard(function() {
                card.visible = false;
                card.positionCard();
            });
        }

        // pause for effect
        setTimeout(() => {
            // sort the cards
            this._drawn.sort(function (a, b) {
                if (suits.indexOf(a.suit) > suits.indexOf(b.suit) ||
                    (suits.indexOf(a.suit) === suits.indexOf(b.suit) && ranks.indexOf(a.rank) > ranks.indexOf(b.rank))) {
                    return -1;
                }
                return 1;
            });

            // flip the cards and put in the correct order
            i = 0;
            for (let card of this._drawn) {
                card.index = this.getIndex(i);
                card.visible = true;
                card.positionCard();
                i++;
            }

            // fan out and display the cards
            setTimeout(() => {
                this.displayCards();
            }, 500);
        }, 1500)
    }

    drawCard(display = true) {
        if(this._cards.length > 0) {
            // add card to drawn array
            this._drawn.push(this._cards[this._cards.length - 1]);

            // remove from original array
            this._cards.pop();

            if(display) {
                this.displayCards();
            }
        }
    }

    displayCards() {
        this.displayDrawn();
        this.displayDeck();
    }

    // display the drawn cards in a "fan layout"
    displayDrawn() {
        let rotation = 0;
        let start = -90;
        let length = this._drawn.length;

        // set the space between cards, maximum 20
        let interval = 170 / this._drawn.length;
        if(interval > 20) {
            interval = 20;
        }

        let i = 0;
        for (let card of this._drawn) {
            // calculate rotation
            rotation = (i * interval - ((length / 2) * interval)) * -1;

            // set card values
            card.top = -400;
            card.left = 0;
            card.rotation = rotation;
            card.visible = true;
            card.index = this.getIndex(i);

            // position card
            card.positionCard();
            i++;
        }
    }

    displayDeck() {
        let i = 0;
        for (let card of this._cards) {
            // move slightly to make it look like a deck
            let distance = i * 0.3;
            card.top = distance;
            card.left = distance;
            card.index = i;
            card.rotation = 0;
            card.visible = false;
            card.positionCard();
            i++;
        }
    }
}

module.exports = Deck;