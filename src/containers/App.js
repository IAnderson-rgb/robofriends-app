import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	onSelectCard = (event) => {
		this.setState({selected: event.target.name});
		console.log({selected: event.target.name});
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		
		// const getRobotDetails = robots.filter((robot) => {
		// 	return robot.name.toLowerCase().includes(selected.toLowerCase());
		// });

		return !robots.length ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='neon' data-text='U'>ROB<span 
				className='flicker-slow'>O</span>FRI<span 
				className='flicker-fast'>E</span>NDS</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} selectCard={this.onSelectCard}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;