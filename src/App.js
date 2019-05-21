import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import DogProfile from './DogProfile';
import Dogs from './Dogs';
import duke from './react-router-patterns/duke.jpg';
import perry from './react-router-patterns/perry.jpg';
import tubby from './react-router-patterns/tubby.jpg';
import whiskey from './react-router-patterns/whiskey.jpg';

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Duke',
				age: 3,
				src: duke,
				facts: [ 'Duke believes that ball is life.', 'Duke likes snow.', 'Duke enjoys pawing other dogs.' ]
			},
			{
				name: 'Perry',
				age: 4,
				src: perry,
				facts: [ 'Perry loves all humans.', 'Perry demolishes all snacks.', 'Perry hates the rain.' ]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is really stupid.',
					'Tubby does not like walks.',
					'Angelina used to hate Tubby, but claims not to anymore.'
				]
			}
		]
	};
	getDogInfo(name) {
		return this.props.dogs.filter((dog) => dog.name === name)[0];
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/dogs" render={() => <Dogs dogs={this.props.dogs} />} />
					<Route
						exact
						path="/dogs/:name"
						render={(routeProp) => <DogProfile info={this.getDogInfo(routeProp.match.params.name)} />}
					/>
					<Redirect to="/" render={() => <Dogs />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
