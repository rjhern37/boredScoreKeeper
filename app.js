// alert('Oy Oy mate!!!');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

p1Button.addEventListener('click', function () {
	alert('Player 1 clicked');
});

p2Button.addEventListener('click', function () {
	alert('Player 2 clicked');
});

resetButton.addEventListener('click', function () {
	alert('Reset complete');
});
