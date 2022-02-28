import { useState, useEffect, useContext } from "react";
import ShopContext from "../context/ShopContext";

function MenuItem({ item }) {
	const [selected, setSelected] = useState(false);

	// const [textColor, setTextColor] = useState("darkBrown");
	// const [bgColor, setBgColor] = useState("lightBrown");
	// const [shadowSize, setShadowSize] = useState("md");

	const current_state = useContext(ShopContext);

	// useEffect(() => {
	// 	console.log("Selected ===> ", selected);
	// }, [selected]);

	// const change_theme = () => {
	// 	if (textColor == "darkBrown") setTextColor("lightBrown");
	// 	else setTextColor("darkBrown");

	// 	if (bgColor == "darkBrown") setBgColor("lightBrown");
	// 	else setBgColor("darkBrown");
		
	// 	if (shadowSize == "md") setShadowSize("xl");
	// 	else setShadowSize("md")
	// }

	return (

		(selected) ? (
			<div
			onClick={(e) => {
				setSelected(!selected);
				current_state.updateCart(item.id, 1, item.price);
				e.preventDefault();
			}}
			className={`card my-3 max-w-md w-full shadow-md rounded-xl border-darkBrown border-[1px] bg-darkBrown duration-150}`}
		>
			<div className="flex px-5 my-3 justify-between text-[15px] font-roboto font-semibold text-lightBrown">
				<p className="">{item.name}</p>
				<p className="">{item.price}</p>
			</div>

			{item.description && (
				<div className="px-5 py-3 justify-between text-[13px] font-roboto font-normal w-[60%] text-lightBrown">
					<p>{item.description}</p>
				</div>
			)}
		</div>
		) : (
			<div
			onClick={(e) => {
				setSelected(!selected);
				current_state.updateCart(item.id, 1, item.price);
				e.preventDefault();
			}}
			className={`card my-3 max-w-md w-full shadow-xl rounded-xl border-darkBrown border-[1px] bg-brown duration-150 text-darkBrown`}
		>
			<div className="flex px-5 my-3 justify-between text-[15px] font-roboto font-semibold">
				<p className="">{item.name}</p>
				<p className="">{item.price}</p>
			</div>

			{item.description && (
				<div className="px-5 py-3 justify-between text-[13px] font-roboto font-normal w-[60%]">
					<p>{item.description}</p>
				</div>
			)}
		</div>
		)


		
	);
}
export default MenuItem;
