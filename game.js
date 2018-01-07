const playerClasses = {
	playerA: 'red',
	playerB: 'blue'
}
let currentPlayer;
document.addEventListener('DOMContentLoaded', function () {
	initGame();
	function initGame () {
		let fields = document.querySelectorAll('.board > div');
		currentPlayer = 'playerA';
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
		});
		function fieldClickHandler () {
			let playerClass = playerClasses[currentPlayer];
			this.removeEventListener('click', fieldClickHandler);
			this.classList.add(playerClass);
			currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
		};
	};
});