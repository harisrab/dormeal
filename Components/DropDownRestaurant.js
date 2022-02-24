import { useState, useEffect } from "react";

function DropDownRestaurant({ names }) {
	useEffect(() => {
		console.log("names ===> ", names);
	}, []);

	return (
		<select className="select w-full max-w-xs select-primary bg-lightBrown text-darkBrown">
			<option disabled selected>
				Choose a restaurant
			</option>
			{names.map((name, index) => (
				<option key={index}>{name}</option>
			))}
		</select>
	);
}

export default DropDownRestaurant;
