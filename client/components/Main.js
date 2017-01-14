import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				{/* passes props from this component down to the first child */}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}