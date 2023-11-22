import home from './home';
import menu from './menu';
import about from './about';
import './style.css';

const content = document.getElementById('content');

const header = document.createElement('h1');
header.classList.add('page-title');
header.textContent = 'Sushi Japan';

content.appendChild(header);

const tabs = document.createElement('div');
const homeTab = document.createElement('a');
const menuTab = document.createElement('a');
const aboutTab = document.createElement('a');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
aboutTab.textContent = 'About';

const tabList = [homeTab, menuTab, aboutTab];

tabList.forEach((tab) => {
	tab.classList.add('menu-tab');
	tabs.appendChild(tab);
});

tabs.classList.add('navigation');

content.appendChild(tabs);

const main = document.createElement('div');
main.setAttribute('id', 'main');
content.appendChild(main);

home();

homeTab.addEventListener('click', () => {
	main.textContent = '';
	home();
});

menuTab.addEventListener('click', () => {
	main.textContent = '';
	menu();
});

aboutTab.addEventListener('click', () => {
	main.textContent = '';
	about();
});
