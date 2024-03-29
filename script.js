window.addEventListener('load', () =>{
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');

	const visual = document.querySelector('.visual');
	const colors = ["#3cba54","#f4c20d","#db3236","#4885ed","#f4c20d","#db3236"];


	pads.forEach((pad, index) => {
		pad.addEventListener('click',function(){
		sounds[index].currentTime = 0;
		sounds[index].play();

		createBubbles(index);
		});
	});

	//function that makes bubbles
	const createBubbles = (index) => {
		const bubble = document.createElement('div');
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1.5s ease';
		bubble.style.animation = 'jump 1.5s ease';
		bubble.addEventListener('animationend', function () {
			visual.removeChild(this);
		})
	};
});