document.addEventListener('DOMContentLoaded', function () {
const playerClasses = {
	playerA: 'red',
	playerB: 'blue'
}
let currentPlayer;
let emptyFields;
let fields = document.querySelectorAll('.board > div');
let redDefault = 0;
let blueDefault = 0;
let redScore = document.querySelector('#scoreOne');
let blueScore = document.querySelector('#scoreTwo');
let reset = document.querySelector('.reset').addEventListener('click', () => {
	redDefault = redScore.innerHTML = 0;
	blueDefault = blueScore.innerHTML = 0;
});
	initGame();
	function initGame() {
		currentPlayer = 'playerA';
		emptyFields = 9;
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
			field.className = '';
		});
		/* reset.addEventListener('click', () => {
			console.log(reset);
			redScore.innerHTML = 0;
			blueScore.innerHTML = 0;
		}); */
	};
	function fieldClickHandler () {
		let playerClass = playerClasses[currentPlayer];
		this.classList.add(playerClass);
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
				redDefault++;
				redScore.innerHTML = redDefault;
				console.log(redDefault)
				initGame();
			},100);
		} 
		else if (blueWon) {
			setTimeout(()=> {
				alert('Player 2 won!');
				blueDefault++;				
				blueScore.innerHTML = blueDefault;
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