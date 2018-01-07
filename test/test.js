require('jsdom-global')()
const should = require('should');
const Deck = require('../src/deck');
const Card = require('../src/card');

// basic page
document.body.innerHTML = '<html><body><div id="deck1"></div></body></html>'

describe('Deck', () => {
    let deck;
    beforeEach(() => {
        deck = new Deck('deck1');
    });

    it('should have 52 cards', () => {
        deck.cards.length.should.equal(52);
    });

    it('should be a two of clubs as first card', function() {
        deck.cards[0].suit.should.equal('club');
        deck.cards[0].rank.should.equal(2);
    });

    it('should be a ace of diamonds as last card', function() {
        deck.cards[deck.cards.length-1].suit.should.equal('diamond');
        deck.cards[deck.cards.length-1].rank.should.equal('A');
    });
});

describe('Draw Card', () => {
    let deck;
    beforeEach(() => {
        deck = new Deck('deck1');
    });

    it('should have 51 cards left in deck', () => {
        deck.drawCard();
        deck.cards.should.have.lengthOf(51);
    });

    it('should have drawn 1 card', () => {
        deck.drawCard();
        deck.drawn.should.have.lengthOf(1);
    });

    it('should draw maximum 51 cards', () => {
        for(let i = 0; i < 60; i++) {
            deck.drawCard(false);
        }
        deck.drawn.should.have.lengthOf(52);
        deck.cards.should.have.lengthOf(0);
    });
});

describe('Card', () => {
    let card;
    beforeEach(() => {
        let deck = document.getElementById('deck1');
        card = new Card(deck, 0, 'hearts', 8);
    });

    it('should be able to get suit', () => {
        card.suit.should.equal('hearts');
    });

    it('should be able to get rank', () => {
        card.rank.should.equal(8);
    });

    it('should be able to set and get top', () => {
        card.top = 100;
        card.top.should.equal(100);
    });

    it('should be able to set and get left', () => {
        card.left = 100;
        card.left.should.equal(100);
    });
});

describe('Sort', () => {
    let deck;
    beforeEach(() => {
        deck = new Deck('deck1');
    });

    it('should sort deck', () => {
        deck.cards[0].suit.should.equal('club');
        deck.cards[0].rank.should.equal(2);
    });

    it('should sort deck after shuffle', () => {
        deck.shuffle();
        for(let i = 0; i < 60; i++) {
            deck.drawCard(false);
        }
        deck.sort();
        setTimeout(() => {
            deck.drawn[0].suit.should.equal('club');
            deck.drawn[0].rank.should.equal(2);
        });
    });
});