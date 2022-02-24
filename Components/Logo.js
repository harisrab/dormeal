import React from "react";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<a className="font-title text-darkBrown text-[25px]">Dormeal</a>
		</Link>
	);
}

export default Logo;
