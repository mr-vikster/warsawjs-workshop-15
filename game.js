document.addEventListener('DOMContentLoaded', function () {
const playerClasses = {
	playerA: 'red',
	playerB: 'blue'
}
let currentPlayer;
let emptyFields;
let fields = document.querySelectorAll('.board > div');
	initGame();
	function initGame() {
		currentPlayer = 'playerA';
		emptyFields = 9;
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
			field.className = '';
		});
	};
	function fieldClickHandler () {
		let playerClass = playerClasses[currentPlayer];
		this.classList.add(playerClass);
		console.log('click', playerClass)
		currentPlayer === 'playerA' ? currentPlayer = 'playerB' : currentPlayer = 'playerA';
		this.removeEventListener('click', fieldClickHandler);	
		emptyFields--;
		checkWinner();
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
			setTimeout(()=> {
				alert('Player 1 won!');
				initGame();
			},100);
		} 
		else if (blueWon) {
			setTimeout(()=> {
				alert('Player 2 won!');
				initGame();
			},100);
		} 
		else if (emptyFields === 0) {
			setTimeout(()=> {
				alert('GAME OVER');
				initGame();
			},100);
		}
	}
});