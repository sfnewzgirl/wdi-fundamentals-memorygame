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

var cards = ['queen', 'king', 'queen', 'king'];

var board = document.getElementById('game-board');

console.log(board)

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
	}
};

createBoard();