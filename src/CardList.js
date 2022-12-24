import React from "react";
import Card from './Card';

const CardList = ({ robots }) => {
	// example of destructoring the prop as a peram.
	return (
		<div>
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