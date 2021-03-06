// Standard functions
import { useState, useEffect } from "react";

// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";

export default function Shops() {
	const [names, setNames] = useState(["Food place 1", "Food place 2", "Food place 3"]);

	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<NavBar />

			<div className="w-screen h-full flex flex-col items-center justify-between bg-lightBrown">
				<div className="py-10"></div>
				<DropDownRestaurant names={names} />
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"menu"} text={"Table Menu"} />
				</div>
			</div>
		</div>
	);
}
