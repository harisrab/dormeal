import { useState, useEffect } from "react";

function DropDownRestaurant({ names, handleRestaurantSelection, menuSelection }) {
	useEffect(() => {
		console.log("names ===> ", names);
	}, []);

	return (
		<select
		onChange={(e) =>{
			names.map((item, index) => {
				if(item.name === e.target.value){
					handleRestaurantSelection(item);
				}	
			})
		}} 

		 className="select w-full max-w-xs select-primary bg-lightBrown text-darkBrown rounded-full">
			<option disabled selected>
				Choose a restaurant
			</option>
			{names.map((value, index) => (
				<option key={index}>{value.name}</option>
			))}
		</select>
	);
}

export default DropDownRestaurant;
