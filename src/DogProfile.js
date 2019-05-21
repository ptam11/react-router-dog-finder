import React, { Component } from 'react';
import './DogProfile.css'

class DogProfile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {name, age, src, facts} = this.props.info
		const factsList = facts.map(fact => <li>{fact}</li>)
		return (
			<div className="DogProfile">
				<h1>This is {name} page</h1>
				<img className="DogProfile-img" src={src} alt=""/>
				<div> {name} is {age} years old</div>
				<h3>Facts:</h3>
				<ul>
					{factsList}
				</ul>
			</div>
		);
	}
}

export default DogProfile;
