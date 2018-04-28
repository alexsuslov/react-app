import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route from './route/';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Route />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
