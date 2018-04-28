import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/';
import Login from './login/';

export default  props => (
	<Router>
		<div>
		<Route exact path="/" component={Home} />
		<Route path="/login" component={Login} />
		</div>
	</Router>
);
