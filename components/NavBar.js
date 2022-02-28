import React, { useContext } from "react";
import Link from "next/link";
import Cart from "./Cart";
import UserButton from "./UserButton";
import Logo from "./Logo";
import ShopContext from "../context/ShopContext";

function NavBar() {

	const current_state = useContext(ShopContext);

	return (
		<div className="navbar border-b-[1px] border-darkBrown bg-lightBrown">
			<div className="flex-1 items-center ml-4">
				<Logo />
			</div>
			<div className="flex-none">
				<Cart totalItems={current_state.state['cart'].length} totalCost={current_state.state['Total_Bill']} />
				<UserButton />
			</div>
		</div>
	);
}

export default NavBar;
