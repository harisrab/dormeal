import { useState, useEffect } from "react";

function MenuItem({ name, price, description }) {
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		console.log("Selected ===> ", selected);
	}, [selected]);

	// cs

	return selected ? (
		<div
			onClick={() => setSelected(!selected)}
			className={`card my-3 max-w-md w-full shadow-${
				selected ? "xl" : "md"
			} rounded-xl border-darkBrown border-[1px] bg-darkBrown duration-150 text-lightBrown`}
		>
			<div className="flex px-5 my-3 justify-between text-[15px] font-roboto font-semibold">
				<p className="">{name}</p>
				<p className="">{price}</p>
			</div>

			{description && (
				<div className="px-5 py-3 justify-between text-[13px] font-roboto font-normal w-[60%]">
					<p>{description}</p>
				</div>
			)}
		</div>
	) : (
		<div
			onClick={() => setSelected(!selected)}
			className={`card my-3 max-w-md w-full shadow-${
				selected ? "xl" : "md"
			} rounded-xl border-darkBrown border-[1px] bg-lightBrown duration-150 text-darkBrown`}
		>
			<div className="flex px-5 my-3 justify-between text-[15px] font-roboto font-semibold">
				<p className="">{name}</p>
				<p className="">{price}</p>
			</div>

			{description && (
				<div className="px-5 py-3 justify-between text-[13px] font-roboto font-normal w-[60%]">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}
export default MenuItem;
