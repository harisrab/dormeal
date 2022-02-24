// Standard functions
import DateChoose from "../Components/DateChoose";
import { useState, useEffect } from "react";

// Components import
import DropDownRestaurant from "../Components/DropDownRestaurant";
import NavBar from "../Components/NavBar";

export default function Shops() {
	const [names, setNames] = useState(["Breakfast", "Lunch", "Dinner"]);

	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<NavBar />

			{/* <div className="w-screen h-full flex flex-col items-center justify-center bg-lightBrown">
				
				<NewDate/>
			</div> */}

			{/* <DateChoose /> */}

			<div className="w-screen h-full flex flex-col items-center justify-center bg-lightBrown">
				<DropDownRestaurant names={names} />
			</div>
		</div>
	);
}
