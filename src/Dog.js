import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Link to={`/dogs/${this.props.name}`}>
					<img src={this.props.src} alt="dog" />
				</Link>
			</div>
		);
	}
}

export default Dog;
