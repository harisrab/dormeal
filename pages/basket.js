// Standard functions
import { useState, useEffect, useContext } from "react";

// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";
import BasketItem from "../components/BasketItem";
import shopContext from "../context/shopContext";

export default function Shops() {

	let [total, setTotal] = useState(0);

	const current_state = useContext(shopContext);

	const [names, setNames] = useState([
		"Food place 1",
		"Food place 2",
		"Food place 3",
	]);

	const calculate_total = (price) => {
		setTotal(total + price);
	}

	return (
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-screen flex flex-col items-center px-10 justify-between bg-lightBrown">
				<div className="py-10"></div>
				<div className="w-full h-full">
					<h1 className="font-roboto font-bold text-darkBrown text-[28px] mb-5">
						Basket
					</h1>

					{current_state['menu'].map(
						(value) => <BasketItem name={value.name} price={value.price} description={value.description} add_value_function={calculate_total}/>)}

					
				</div>

				<div className="flex w-full py-5 items-center justify-between font-roboto text-darkBrown">
					<div className="h-full flex items-end font-medium text-[20px]">
						<p>Total: ${total}</p>
					</div>
					<div className="text-[14px]">
						<p>Service fee: ${current_state["service_fee"]}</p>
						<p>Delivery fee: ${current_state["delivery_fee"]}</p>
					</div>
				</div>
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"checkout"} text={"Checkout"} />
				</div>
			</div>
		</div>
	);
}
