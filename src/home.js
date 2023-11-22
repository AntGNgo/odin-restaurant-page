import sushi1 from './assets/sushi1.jpg';
import sushi2 from './assets/sushi2.jpg';
import sushi3 from './assets/sushi3.jpg';

import './home.css';

const home = () => {
	const main = document.getElementById('main');
	const welcome = document.createElement('h1');
	welcome.textContent = 'Welcome to Sushi Japan';

	const sushiPics = document.createElement('div');
	sushiPics.classList.add('sushi-pics');

	const imageOne = new Image();
	imageOne.src = sushi1;
	const imageTwo = new Image();
	imageTwo.src = sushi2;
	const imageThree = new Image();
	imageThree.src = sushi3;
	sushiPics.appendChild(imageOne);
	sushiPics.appendChild(imageTwo);
	sushiPics.appendChild(imageThree);

	main.appendChild(welcome);
	main.appendChild(sushiPics);
};

export default home;
