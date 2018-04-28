import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Layout from '../../components/layout/';
import './style.css';
import {fetchPostForm} from '../fetch';

const State = {};

const actionSlider = payload => ({ type: 'SLIDER', payload });

const handleChange = e => {
	const { name, value } = e.target;
	State[name] = value;
};

const handleSubmit = ({ dispatch }) => e => {
	dispatch(actionSlider(true));
	dispatch(actionSlider(false));
};

const Login = props => {
	return (
		<Layout>
			<div className="loginForm">
				<Form>
					<FormGroup>
						<Label for="username">User:</Label>
						<Input
							type="username"
							name="username"
							placeholder="username"
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							type="password"
							name="password"
							placeholder="password"
							onChange={handleChange}
						/>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</div>
		</Layout>
	);
};

Login.propTypes = {};

export default Login;
