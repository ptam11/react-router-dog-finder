import React, { Component } from 'react';
import Dog from './Dog';

class Dogs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const dogs = this.props.dogs.map((dog) => <Dog src={dog.src} name={dog.name}/>);
		return <div>{dogs}</div>;
	}
}

export default Dogs;
