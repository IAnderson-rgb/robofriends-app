import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from	'../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


function App() {
	
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');
const [count, setCount] = useState('');
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setRobots(users));
			//console.log(count);
	}, []) // The empty array is important here. It prevents useEffect from running everytime our App() is returned.
				// If you add count to the array, only useEffect only runs if count changes.
	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !robots.length ? (
			<h1>..Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='neon' data-text='U'>ROB<span 
				className='flicker-slow'>O</span>FRI<span 
				className='flicker-fast'>E</span>NDS</h1>
				<button onClick={()=>setCount(count+1)}>Click Me</button>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}

export default App;