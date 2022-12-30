import React from "react";
import { useState } from "react";
import Card from './Card';

const CardList = ({ robots }) => {
	// example of destructoring the prop as a peram.
	const [crdState, setCrdState] = useState(false);

	function handleClick() {
		setCrdState((crdState) => !crdState);
	}

	let toglleClassCheck = crdState ? 'dn' : '';
	console.log('Toggled', toglleClassCheck);
	if (toglleClassCheck.includes('dn')) {
		return (
			<div onClick={handleClick}>
				{robots.map((robot, i) => {
					return (
						<Card
							key={robots[i].id}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					);
				})}
			</div>
		);
	}
	return (
		<div 
		className={`${toglleClassCheck}`} 
		onClick={handleClick}>
			{robots.map((robot, i) => {
				return (
					<Card
						key={robots[i].id}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;