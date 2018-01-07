const Card = require('./card');

const suits = ['club', 'diamond', 'spade', 'heart'];
const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

class Deck {
    constructor(id) {
        this.div = document.getElementById(id);
        this._cards = [];
        this.reset();
        this.positionCards();
        this.displayCards();
        this.drawn = 0;

        this.shuffle();
        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
        this.drawCard();
    }

    get cards() {
        return this._cards;
    }

    reset() {
        let i = 0;
        for (let suit of suits) {
            for (let rank of ranks) {
                this._cards.push(new Card(this.div, i, suit, rank));
                i++;
            }
        }
    }

    positionCards() {
        let i = 0;
        for (let card of this._cards) {
            let distance = (52-i) * 0.3;
            card.left = distance;
            card.top = distance;
            card.index = i;
            i++;
        }
    }

    displayCards() {
        this.div.innerHTML = '';
        for (let card of this._cards) {
            card.append();
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

        // instead of reordering the divs I just rerender them
        this.displayCards();
        this.positionCards();

        // then show the animation
        this.shuffleAnimation();
    }

    shuffleAnimation() {
        for (let card of this._cards) {
            card.shuffleAnimation();
        }
    }

    drawCard() {
        const reversed = [...this._cards].reverse();
        let i = reversed.length-1;
        for (let card of reversed) {
            if(card.drawn === false) {
                this._cards[i].drawn = true;
                this.drawn++;
                this.fan();
                break;
            }
            i--;
        }
    }

    drawnCards() {
        return this._cards.filter(card => card.drawn === true);
    }

    fan() {
        let cards = this.drawnCards();
        let even = cards.length % 2 === 0;
        let middle = cards.length / 2;
        let i = 0;
        let interval = 170 / cards.length;
        if(interval > 20) {
            interval = 20;
        }

        let start = 180 / cards.length;

        for (let card of cards) {
            let deg = -100 + (interval * i) + start;
            if(cards.length === 1) {
                deg = 0;
            } else if(even) {
                deg = deg + (interval / 2);
            }
            card.rotateAnimation(-400, deg);
            card.visible = true;
            i++;
        }
    }

    sort() {
        let cards = this.drawnCards();
        for (let card of cards) {
            card.rotation = 0;
            setTimeout(function() {
                card.visible = false;
            }, 500);
        }

        this._cards.sort(function (a, b) {
            if (suits.indexOf(a.suit) < suits.indexOf(b.suit) ||
                (suits.indexOf(a.suit) === suits.indexOf(b.suit) && ranks.indexOf(a.rank) < ranks.indexOf(b.rank))) {
                return -1;
            }
            return 1;
        });

        setTimeout(() => {
            this.displayCards();
            setTimeout(() => {
                for (let card of cards) {
                    card.visible = true;
                }
                setTimeout(() => {
                    this.fan();
                }, 500);
            }, 500);
        }, 1500)
    }
}

module.exports = Deck;