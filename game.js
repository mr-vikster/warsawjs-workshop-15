document.addEventListener('DOMContentLoaded', function () {
	initGame();
	function initGame () {
		let fields = document.querySelectorAll('.board > div');
		fields.forEach(field => {
			field.addEventListener('click', fieldClickHandler);
		});
		function fieldClickHandler () {
			console.log('Hello', this);
		};
	};
});