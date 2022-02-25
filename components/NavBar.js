import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import UserButton from "./UserButton";
import Logo from "./Logo";

function NavBar() {
	return (
		<div className="navbar border-b-[1px] border-darkBrown bg-lightBrown">
			<div className="flex-1 items-center ml-4">
				<Logo />
			</div>
			<div className="flex-none">
				<Cart totalItems={8} totalCost={888} />
				<UserButton />
			</div>
		</div>
	);
}

export default NavBar;
