const navigation = () => {
	const content = document.getElementById('content');

	const header = document.createElement('h1');
	header.classList.add('page-title');
	header.textContent = 'Sushi Japan';

	content.appendChild(header);

	const tabs = document.createElement('ul');
	const homeTab = document.createElement('li');
	const menuTab = document.createElement('li');
	const aboutTab = document.createElement('li');

	homeTab.textContent = 'Home';
	menuTab.textContent = 'Menu';
	aboutTab.textContent = 'About';

	const tabList = [homeTab, menuTab, aboutTab];

	tabList.forEach((tab) => {
		tab.classList.add('menu-tab');
		tabs.appendChild(tab);
	});

	content.appendChild(tabs);
};

export default navigation;
