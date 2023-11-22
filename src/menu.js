const menu = () => {
	const main = document.getElementById('main');
	const list = document.createElement('ul');

	const caliRoll = document.createElement('li');
	const sashimi = document.createElement('li');
	const nigiri = document.createElement('li');

	const listItems = [caliRoll, sashimi, nigiri];

	caliRoll.textContent = 'California Roll';
	sashimi.textContent = 'Sashimi';
	nigiri.textContent = 'Nigiri';

	listItems.forEach((item) => {
		list.appendChild(item);
	});

	main.appendChild(list);
};

export default menu;
