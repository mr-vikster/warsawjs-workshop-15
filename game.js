document.addEventListener('DOMContentLoaded', function () {
const playerClasses = {
	playerA: 'red',
	playerB: 'blue'
}
let currentPlayer;
let emptyFields = 9;
let fields = document.querySelectorAll('.board > div');
	initGame();
	function initGame () {
		currentPlayer = 'playerA';
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
		});
		function fieldClickHandler () {
			let playerClass = playerClasses[currentPlayer];
			this.classList.add(playerClass);
			currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
			this.removeEventListener('click', fieldClickHandler);	
			emptyFields--;
			checkWinner();
			if (emptyFields === 0) {
				setTimeout(alert('GAME OVER'),500);
			}
		};
		function checkWinner () {
			let winningArray = 
			[
			fields[0].className + fields[1].className + fields[2].className,
			fields[3].className + fields[4].className + fields[5].className,
			fields[6].className + fields[7].className + fields[8].className,
			fields[0].className + fields[3].className + fields[6].className,
			fields[1].className + fields[4].className + fields[7].className,
			fields[2].className + fields[5].className + fields[8].className,
			fields[0].className + fields[4].className + fields[8].className,
			fields[2].className + fields[4].className + fields[6].className
			]
			let redWon = winningArray.includes('redredred');
			let blueWon = winningArray.includes('blueblueblue');			
			if (redWon) {
				alert('Player 1 won');
			} else if (blueWon) {
				alert('Player 2 won!');
			}


			if (emptyFields === 0 || redWon || blueWon) {
				initGame();
			}
			/* var combo1 = fields[0].className + fields[1].className + fields[2].className;
			var combo2 = fields[3].className + fields[4].className + fields[5].className;
			var combo3 = fields[6].className + fields[7].className + fields[8].className;
			var combo4 = fields[0].className + fields[3].className + fields[6].className;
			var combo5 = fields[1].className + fields[4].className + fields[7].className;
			var combo6 = fields[2].className + fields[5].className + fields[8].className;
			var combo7 = fields[0].className + fields[4].className + fields[8].className;
			var combo8 = fields[2].className + fields[4].className + fields[6].className;
			
			if (combo1 === 'redredred' || combo2 === 'redredred' || combo3 === 'redredred' || combo4 === 'redredred' || combo5 === 'redredred' || combo6 === 'redredred' || combo7 === 'redredred' || combo8 === 'redredred') {
				alert('Player 1 won!');
			} else if (combo1 === 'blueblueblue' || combo2 === 'blueblueblue' || combo3 === 'blueblueblue' || combo4 === 'blueblueblue' || combo5 === 'blueblueblue' || combo6 === 'blueblueblue' || combo7 === 'blueblueblue' || combo8 === 'blueblueblue') {
				alert('Player 2 won!');
			} */
		}
	};
});