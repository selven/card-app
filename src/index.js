const Deck = require('./deck');
let deck = new Deck('deck1');

let shuffleButton = document.getElementById('shuffle');
let drawButton = document.getElementById('draw');
let sortButton = document.getElementById('sort');
let resetButton = document.getElementById('reset');

shuffleButton.addEventListener('click', function(e) {
    e.preventDefault();
    deck.shuffle();
});

drawButton.addEventListener('click', function(e) {
    e.preventDefault();
    deck.drawCard();
});

sortButton.addEventListener('click', function(e) {
    e.preventDefault();
    deck.sort();
});

resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    location.reload();
});