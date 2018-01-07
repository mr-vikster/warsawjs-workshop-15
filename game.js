document.addEventListener('DOMContentLoaded', function () {
	let currentPlayer;
	let emptyFields;
	let redDefault = 0;
	let blueDefault = 0;
	let fields = document.querySelectorAll('.board > div');
	let redScore = document.querySelector('#scoreOne');
	let blueScore = document.querySelector('#scoreTwo');
	let headerInfo = document.querySelector('header');
	const playerClasses = {
		playerA: 'red-path',
		playerB: 'blue-path'
	}
	const headerClasses = {
		playerA: 'red',
		playerB: 'blue'
	}
	let names = {
		playerA: 'Player 1',
		playerB: 'Player 2'
	}
	let reset = document.querySelector('.reset').addEventListener('click', () => {
		redDefault = redScore.innerHTML = 0;
		blueDefault = blueScore.innerHTML = 0;
	});
	initGame();
	function initGame() {
		currentPlayer = 'Player 1';
		emptyFields = 9;
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
			field.className = '';
		});
	};
	function fieldClickHandler () {
		let playerClass = playerClasses[currentPlayer];
		this.classList.add(playerClass);
		headerInfo.classList.remove(playerClasses[currentPlayer]);		
		headerInfo.classList.remove(headerClasses[currentPlayer]);				
		currentPlayer === 'Player 1' ? currentPlayer = 'Player 2' : currentPlayer = 'Player 1';
		this.removeEventListener('click', fieldClickHandler);	
		emptyFields--;
		checkWinner();
	};
	function checkWinner () {
		headerInfo.classList.add(headerClasses[currentPlayer]);
		headerInfo.innerHTML = `Round for ${currentPlayer}`;
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
		let redWon = winningArray.includes('red-pathred-pathred-path');
		let blueWon = winningArray.includes('blue-pathblue-pathblue-path');

		if (redWon) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for Player 1';
				alert('Player 1 won!');
				redDefault++;
				redScore.innerHTML = redDefault;
				initGame();
			},500);
		} 
		else if (blueWon) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for Player 1';
				alert('Player 2 won!');
				blueDefault++;				
				blueScore.innerHTML = blueDefault;
				initGame();
			},500);
		} 
		else if (emptyFields === 0) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for Player 1';
				alert('GAME OVER');
				initGame();
			},500);
		}
	}
});