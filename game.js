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
		playerA: 'red',
		playerB: 'blue'
	}
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
	};
	function fieldClickHandler () {
		let playerClass = playerClasses[currentPlayer];
		this.classList.add(playerClass);
		headerInfo.classList.remove(playerClasses[currentPlayer]);		
		currentPlayer === 'playerA' ? currentPlayer = 'playerB' : currentPlayer = 'playerA';
		this.removeEventListener('click', fieldClickHandler);	
		emptyFields--;
		checkWinner();
	};
	function checkWinner () {
		headerInfo.classList.add(playerClasses[currentPlayer]);
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
		let redWon = winningArray.includes('redredred');
		let blueWon = winningArray.includes('blueblueblue');

		if (redWon) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for playerA';
				alert('Player 1 won!');
				redDefault++;
				redScore.innerHTML = redDefault;
				initGame();
			},100);
		} 
		else if (blueWon) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for playerA';
				alert('Player 2 won!');
				blueDefault++;				
				blueScore.innerHTML = blueDefault;
				initGame();
			},100);
		} 
		else if (emptyFields === 0) {
			setTimeout(()=> {
				headerInfo.classList = '';
				headerInfo.innerHTML = 'Round for playerA';
				alert('GAME OVER');
				initGame();
			},100);
		}
	}
});