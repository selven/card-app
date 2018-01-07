const Animations = require('./animations');

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

        this.append();
    }

    get suit() {
        return this._suit;
    }

    get rank() {
        return this._rank;
    }

    get top() {
        return this._top;
    }

    set top(top) {
        this._top = top;
    }

    get left() {
        return this._left;
    }

    set left(left) {
        this._left = left;
    }

    set index(index) {
        this._index = index;
    }

    set rotation(rotation) {
        this._rotation = rotation;
    }

    set visible(visible) {
        this._visible = visible;
    }

    // position all elements of the card. Show/ hide the card
    positionCard(callback = null) {
        // show or hide card
        if(this._visible) {
            this.div[0].querySelectorAll('.flip')[0].classList.add("flip--flipped");
        } else {
            this.div[0].querySelectorAll('.flip')[0].classList.remove("flip--flipped");
        }

        // position elelment
        this.div[0].style.zIndex = this._index;
        this.div[0].style.top = this._top + 'px';
        this.div[0].style.left = this._left + 'px';
        this.div[0].style.transform = 'rotate(' + this._rotation + 'deg)';

        // wait for css animation. Could clear existing timeouts
        setTimeout(function() {
            if(callback) {
                callback();
            }
        }, 500);
    }

    template() {
        return `
            <div class="card animation card_${this._suit}_${this._rank}" style="top: ${this._top}px; left: ${this._left}px;">
                <div class="flip">
                    <div class="front"><img src="images/cards/${this._rank}_of_${this._suit}s.png" /></div>
                    <div class="back"></div>
                </div>
            </div>
        `;
    }

    // add to the page
    append() {
        this.deck.innerHTML += this.template();
        this.div = this.deck.getElementsByClassName("card_" + this._suit + '_' + this._rank);
    }

    shuffleAnimation(left) {
        // remove css animations
        this.div[0].classList.remove("animation");
        Animations.shuffle(this.div, this._index, this._left, this._top, () => {
            // add css animations back
            this.div[0].classList.add("animation");
        });
    }
}

module.exports = Card;