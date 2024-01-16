import logo from './logo.svg'; // декларативный
import './App.css';
import { createElement } from 'react'; // декларативный

// и дальше императивный стиль
export const App = () => {
	return createElement(
		'div',
		{ 'className': 'App' },
		header,
	);
};

const a = createElement('a',
	{
		className: 'App-link',
		href: 'https://reactjs.org',
		target: '_blank',
		rel: "noopener noreferrer"
	}, 'Learn React');

const year = new Date().getFullYear();
const yearElem = createElement('div', null, `${year}`);
const p = createElement('p', null, 'Edit ',
	createElement('code', null, 'src/App.js'),
	' and save to reload.')
const img = createElement('img',
	{ src: `${logo}`, className: 'App-logo', alt: 'logo' });
const header = createElement('header',
	{ className: 'App-header' }, img, p, a, yearElem);

