const Deck = require('./deck');

let deck = new Deck('deck1');

let shuffleButton = document.getElementById('shuffle');
let drawButton = document.getElementById('draw');
let sortButton = document.getElementById('sort');

shuffleButton.addEventListener('click', function(e) {
    e.preventDefault();
    deck.shuffle();
});

console.log()

drawButton.addEventListener('click', function(e) {
    // e.preventDefault();
    document.getElementById("draw").disabled = true;

    console.log(document.getElementById("draw"));

    deck.drawCard();
});

sortButton.addEventListener('click', function(e) {
    e.preventDefault();
    deck.sort();
});