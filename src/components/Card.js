import React from "react";
import { useState } from "react";
import img from '../assets/cardDetails_3.jpg'
import './Card.css';


const Card = (props) => {
	const { name, email, id, phone, company, website, address } = props;
	const [crdState, setCrdState] = useState(false);

	function handleClick() {
		//Needed a way to handle the toggling for card details
		setCrdState((crdState) => !crdState);
	}

	let toglleClassCheck = crdState ? 'dn' : '';

	if (toglleClassCheck.includes('dn')) {
		console.log('Toggled 1', toglleClassCheck);
		return (
			<div
				className='tc 
			 fade-in-image pointer 
       bg-light-green
       dib br3 pa3 ma2 
       grow bw2 shadow-5'
				onClick={handleClick}
			>
				<img 
        src={img} 
        className='mw5 vh-25 br2' 
        alt='robots' />
				<div>
					<h2>{name}</h2>
					<h3>{company.catchPhrase}</h3>
					<p>{`${address.street} 
          ${address.suite} 
          ${address.city}, 
          ${address.zipcode}`}</p>
					<p>{`Works at: ${company.name}`}</p>
					<p>{`Occupation: ${company.bs}`}</p>
				</div>
			</div>
		);
	}
	return (
		<div
			className={
			`${toglleClassCheck}
      tc pointer 
			o-bg-light-green 
      dib br3 pa3 ma2 
      grow bw2 shadow-5`}
			onClick={handleClick}
		>
			<img 
      src={`https://robohash.org/${id}?200x200`} 
      alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{phone}</p>
				<p>{email}</p>
        <p>{website}</p>
			</div>
		</div>
	);
}

export default Card;