import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import MenuItem from "../components/MenuItem";
import ContinueButton from "../components/ContinueButton";
import ShopContext from "../context/ShopContext";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

function Beverage() {
	let current_state = useContext(ShopContext);

	const router = useRouter();

	useEffect(
		() => {
			if(!auth.currentUser){
				router.replace('/');
			}	
		}, []);
	
	

	return (
		<div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
			<NavBar />

			<div className="w-full h-full p-5">
				<div className="w-full h-10 my-5 bg-yellow-200 max-w-md"></div>
				<div>
					{current_state.state.beverages.map((product, index) => (
						<MenuItem
							key={index}
							item={product}/>
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
