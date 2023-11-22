const home = () => {
	const main = document.getElementById('main');
	const header = document.createElement('h1');
	header.textContent = 'Welcome to Sushi Japan';

	main.appendChild(header);
};

export default home;
