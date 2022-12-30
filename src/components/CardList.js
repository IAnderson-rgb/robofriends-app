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
						phone={robots[i].phone}
						email={robots[i].email}
						company={robots[i].company}
						website={robots[i].website}
						address={robots[i].address}
					/>
				);
			})}
		</div>
	);
};

export default CardList;