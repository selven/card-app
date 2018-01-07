const Velocity = require('velocity-animate');

class Card {
    constructor(deck, i, suit, rank) {
        this.deck = deck;
        this._suit = suit;
        this._rank = rank;
        this._visible = false;
        this._top = 0;
        this._left = 0;
        this._index = i;
        this._rotation = 0;
        this._drawn = false;
    }

    get drawn() {
        return this._drawn;
    }

    get suit() {
        return this._suit;
    }

    get rank() {
        return this._rank;
    }

    set drawn(drawn) {
        this._drawn = drawn;
    }

    set index(index) {
        this._index = index;
    }

    set top(top) {
        this._top = top;
        if(this.div) {
            Velocity(this.div, {
                top: top
            }, {
                duration: 200
            });
        }
    }

    set left(left) {
        this._left = left;
        if(this.div) {
            Velocity(this.div, {
                left: left
            }, {
                duration: 500
            });
        }
    }

    set rotation(deg) {
        this._rotation = deg;
        if(this.div) {
            Velocity(this.div, {
                rotateZ: deg + 'deg'
            }, {
                duration: 500
            });
        }
    }

    set visible(visible) {
        this._visible = visible;
        if(visible) {
            this.div[0].querySelectorAll('.flip')[0].classList.add("flip--flipped");
        } else {
            this.div[0].querySelectorAll('.flip')[0].classList.remove("flip--flipped");
        }
    }

    template() {
        return `
            <div class="card card_${this._index}" style="top: ${this._top}px; left: ${this._left}px;">
                <div class="flip">
                    <div class="front"><img src="images/cards/${this._rank}_of_${this._suit}s.png" /></div>
                    <div class="back"></div>
                </div>
            </div>
        `;
    }

    append() {
        console.log(this._top);
        this.deck.innerHTML += this.template();
        this.div = this.deck.getElementsByClassName("card_" + this._index);
    }

    rotateAnimation(top, deg) {
        this._left = 0;
        this._top = top;
        this._rotation = deg;
        Velocity("stop");
        Velocity(this.div, {
            top: top,
            left: 0,
            rotateZ: deg + 'deg'
        }, {
            duration: 500
        });
    }

    shuffleAnimation(left) {
        // first shuffle animation
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        Velocity(this.div, {
            left: plusOrMinus * 80
        }, {
            duration: 200,
            delay: this._index * 5
        });
        Velocity(this.div, {
            left: this._left
        }, {
            duration: 200,
            delay: (this._index * 5) + 200
        });

        // second shuffle animation
        Velocity(this.div, {
            top: -75
        }, {
            duration: 200,
            delay: (this._index * 5) + 400
        });
        Velocity(this.div, {
            top: this._top
        }, {
            duration: 200,
            delay: (this._index * 5) + 600
        });
    }
}

module.exports = Card;