// Standard functions
import { useState, useEffect } from "react";

// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";
import BasketItem from "../components/BasketItem";

export default function Shops() {
	const [names, setNames] = useState([
		"Food place 1",
		"Food place 2",
		"Food place 3",
	]);

	return (
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-screen flex flex-col items-center px-10 justify-between bg-lightBrown">
				<div className="py-10"></div>
				<div className="w-full h-full">
					<h1 className="font-roboto font-bold text-darkBrown text-[28px] mb-5">
						Basket
					</h1>

					<BasketItem />
					<BasketItem />
					<BasketItem />
					<BasketItem />
				</div>

				<div className="flex w-full py-5 items-center justify-between font-roboto text-darkBrown">
					<div className="h-full flex items-end font-medium text-[20px]">
						<p>Total: $550</p>
					</div>
					<div className="text-[14px]">
						<p>Service fee: $60</p>
						<p>Delivery fee: $60</p>
					</div>
				</div>
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"checkout"} text={"Checkout"} />
				</div>
			</div>
		</div>
	);
}
