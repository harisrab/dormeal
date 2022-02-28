// Standard functions
import { useState, useEffect, useContext } from "react";
// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";
import BasketItem from "../components/BasketItem";
import ShopContext from "../context/ShopContext";
import { auth } from "../firebase-config";
import { useRouter } from "next/router";

export default function Shops() {
	const router = useRouter();
	let [total, setTotal] = useState(0);

	const current_state = useContext(ShopContext);

	const [names, setNames] = useState([
		"Food place 1",
		"Food place 2",
		"Food place 3",
	]);

	const calculate_total = (price) => {
		setTotal(total + price);
		current_state.updateTotalBill(total);
	}

	useEffect(()=>{
		
		if(!auth.currentUser){
			router.replace('/');
		}

		let temp_total = 0;
		
		current_state.state['cart'].map((value, index) => {
			temp_total += value.total_price;
		});

		setTotal(temp_total);

	}, []);

	return (
		
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-screen flex flex-col items-center px-10 justify-between bg-lightBrown">
				<div className="py-10"></div>
				<div className="w-full h-full">
					<h1 className="font-roboto font-bold text-darkBrown text-[28px] mb-5">
						Basket
					</h1>

					{current_state.state['cart'].map((value, index1) => 
						current_state.state['menu'].map((item, index2) => {
							if (value.id === item.id){
								return <BasketItem name={item.name} 
								price={item.price} 
								key={index2}
								description={item.description} 
								add_value_function={calculate_total}/>
							}
					})
						)}
					

					
				</div>

				<div className="flex w-full py-5 items-center justify-between font-roboto text-darkBrown">
					<div className="h-full flex items-end font-medium text-[20px]">
						<p>Total: ${total}</p>
					</div>
					<div className="text-[14px]">
						<p>Service fee: ${current_state.state["service_fee"]}</p>
						<p>Delivery fee: ${current_state.state["delivery_fee"]}</p>
					</div>
				</div>
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"checkout"} text={"Checkout"} />
				</div>
			</div>
		</div>
	);
}
