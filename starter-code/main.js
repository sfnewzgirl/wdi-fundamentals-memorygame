//define variables of the four cars//

//var cardOne = 'queen';
//var cardTwo = 'king';
//var cardThree = 'queen';
//var cardFour = 'king';

//added game logic//
//if (cardOne === cardThree) {
//	alert("You found a match!");
//}
//else {
//	alert("Sorry, try again!");
//}

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [ ];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	board.appendChild(cardElement);
	board.appendChild(cardElement);
	cardElement.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'king') {
		this.innerHTML = '<img src="king card.jpg"/>';
	}
	else {
		this.innerHTML = '<img src="queen card.jpg"/>';
	}
	if (cardsInPlay.length === 2) {
	isMatch(cardsInPlay);
	cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
	alert("You found a match!");
	}
	else {
	alert("Sorry, try again!");
	}
}

createBoard();