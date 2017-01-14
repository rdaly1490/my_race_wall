import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<nav className="nav">
				<div className="logo">
					<div>LOGO</div>
				</div>
				<div className="account">
					<div className="login">Login</div>
					<div className="create">Create Account</div>
				</div>
			</nav>
		);
	}
}