// Standard functions
import { useState, useEffect } from "react";

// Components import
import DropDownLocation from "../components/DropDownLocation";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function Location() {
	const [location, setLocation] = useState([
		"JCSV",
		"SKY Lee",
		"Starr Hall",
		"University Hall",
	]);

	const router = useRouter();

	useEffect(
		() => {
			if(!auth.currentUser){
				router.replace('/');
			}	
		}, []);

	return (
		<div className="h-screen w-screen flex flex-col items-center">
			<NavBar />

			<div className="w-screen h-full flex flex-col items-center justify-between bg-lightBrown">
				<div className="py-10"></div>
				<DropDownLocation names={location} />
				<div className="py-10 w-full flex justify-center">
					<ContinueButton nextpage={"basket"} text={"Basket"} />
				</div>
			</div>
		</div>
	);
}
