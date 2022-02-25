import React from "react";
import NavBar from "../components/NavBar";
import MenuItem from "../components/MenuItem";
import ContinueButton from "../components/ContinueButton";

function Menu() {
	let products = [
		{
			name: "Italiano Pizza",
			price: "$10",
			description: "Beef; Pork balls; Thai wings; Soup; Milk tea",
		},
	];

	return (
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-full h-full p-5">
				<div className="w-full h-10 my-5 bg-yellow-200 max-w-md"></div>
				<div>
					{products.map((product, index) => (
						<MenuItem
							key={index}
							name={product.name}
							price={product.price}
							description={product.description}
						/>
					))}
				</div>
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"beverage"} text={"Beverages"} />
				</div>
			</div>
		</div>
	);
}

export default Menu;
