import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/';

export default  props => (
	<Router>
		<Route exact path="/" component={Home} />
	</Router>
);
