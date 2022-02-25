import React from "react";
import NavBar from "../components/NavBar";
import MenuItem from "../components/MenuItem";
import ContinueButton from "../components/ContinueButton";

function Beverage() {
	let beverages = [
		{
			name: "Pepsi (500 ml)",
			price: "$10",
		},
		{
			name: "Fanta (200 ml)",
			price: "$5",
		},
		{
			name: "Coke (300 ml)",
			price: "$30",
		},
		{
			name: "Cola (250 ml)",
			price: "$20",
		},
	];

	return (
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-full h-full p-5">
				<div className="w-full h-10 my-5 bg-yellow-200 max-w-md"></div>
				<div>
					{beverages.map((product, index) => (
						<MenuItem
							key={index}
							name={product.name}
							price={product.price}
						/>
					))}
				</div>
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={'location'} text={"Location"} />
				</div>
			</div>
		</div>
	);
}

export default Beverage;
