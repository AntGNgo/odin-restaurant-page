const about = () => {
	// Since 1532
	const main = document.getElementById('main');

	const header = document.createElement('h2');
	header.textContent = "Since 1532, we've been crafting the perfect rolls.";
	main.appendChild(header);
};

export default about;
