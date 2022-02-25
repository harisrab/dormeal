// Standard functions
import { useState, useEffect } from "react";

// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";

export default function Shops() {
	const [names, setNames] = useState(["Breakfast", "Lunch", "Dinner"]);

	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<NavBar />

			<div className="w-screen h-full flex flex-col items-center justify-between bg-lightBrown">
				<div></div>
				<DropDownRestaurant names={names} />
				<div className="h-10 bg-white w-full">
					<ContinueButton />
				</div>
			</div>
		</div>
	);
}
