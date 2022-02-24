import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import 'flowbite';


export default function Home() {
	return (
		<div
			data-theme="dormeal"
			className="w-screen h-screen bg-lightBrown text-darkBrown flex flex-col items-center justify-between"
		>
			<Head>
				<title>Dormeal</title>
			</Head>

			<div className="mt-[180px]">
				<h1 className="font-title text-[50px] text-center">Dormeal</h1>
				<p className="text-center font-roboto font-normal">
					Order food right at your dorms front door.<br></br>All in
					just a few clicks.
				</p>
			</div>
			<div>
				<button className="btn btn-primary gap-8 w-[100%] rounded-full px-8 normal-case font-roboto font-normal text-[16px] bg-{#9F3E1F} text-lightBrown">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12.45 4.91251C11.5125 4.02001 10.3275 3.56251 9.00004 3.56251C6.65254 3.56251 4.66504 5.14501 3.95254 7.28251L3.95251 7.28249V7.28259C3.77251 7.82259 3.66751 8.40009 3.66751 9.00009C3.66751 9.60007 3.765 10.1775 3.95248 10.7175H3.95254C4.66504 12.855 6.65254 14.4375 9.00004 14.4375C10.215 14.4375 11.2425 14.1075 12.0525 13.5676V13.5675C12.9975 12.93 13.635 11.9925 13.8525 10.8825H9V7.5H17.475C17.565 8.0475 17.6175 8.61 17.6175 9.2025C17.6175 11.94 16.6425 14.25 14.9475 15.8175L14.9476 15.8175C13.4626 17.19 11.43 18 9.00004 18C5.48255 18 2.44505 15.9751 0.967546 13.0351L0.967501 13.0351C0.3525 11.8201 0 10.4551 0 9.00009C0 7.54509 0.3525 6.18009 0.967501 4.96509H0.967629L0.967529 4.96501C2.44503 2.02501 5.48254 0 9.00004 0C11.43 0 13.4626 0.892502 15.0151 2.3475L12.45 4.91251Z"
							fill="#F4F4E7"
							fillOpacity="0.63"
						/>
					</svg>
					<span className="">Sign in with Google</span>
				</button>
			</div>
			<div>
				<p className="text-center font-roboto text-[14px] mb-10 font-normal">
					Dormeal 2022 © All rights reserved.
				</p>
			</div>
		</div>
	);
}
