import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const rootEl = document.getElementById('root');
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		rootEl
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render(App)
	});
}