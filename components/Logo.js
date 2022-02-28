import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../firebase-config";

function Logo() {


	const [refLink, setRefLink] = useState("/");


	useEffect(
		() => {
			if(auth.currentUser){
				setRefLink('shops');
			}	
		}, []);


	return (
		<Link href={refLink}>
			<a className="font-title text-darkBrown text-[25px]">Dormeal</a>
		</Link>
	);
}

export default Logo;
