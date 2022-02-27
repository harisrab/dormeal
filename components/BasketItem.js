import React from "react";
import { useState, useEffect } from "react";

function BasketItem({name, price, description, add_value_function}) {
	const [amount, setAmount] = useState(0);

	const [totalprice, setTotalPrice] = useState(price);

	const handleChange = (e) => {
		setAmount(e.currentValue);
		setTotalPrice(price * (amount));
	};

	const increment = () => {
		setAmount(amount + 1);
		setTotalPrice(price * (amount+1));
	};

	const decrement = () => {
		if (amount > 0) {
			setAmount(amount - 1);
			setTotalPrice(price * amount);
		}
	};

	return (
		<div className="h-28 w-full font-roboto duration-300 font-semibold text-[15px] flex flex-col items-center justify-between px-5 py-2 text-darkBrown rounded-lg border-darkBrown border-[1px] my-4 shadow-md hover:shadow-xl">
			<div className="w-full h-10 flex items-center justify-between">
				<h2 className="">{name}</h2>
				<h2 className="">{(amount >= 1) ? `${amount} x`: ""} ${price}{(amount >= 1) ? ` = \$${totalprice}`: ""}</h2>
			</div>
			<div className="w-full h-10 flex items-center justify-between">
				<p className="text-[12px] font-normal max-w-[60%]">
					{description}
				</p>

				<div className="flex w-24 flex-row h-8 border-darkBrown border-[1px] rounded-lg relative bg-transparent">
					<button
						data-action="decrement"
						onClick={() => {
							decrement();
							if (amount > 0) {
								add_value_function(-price);
							}
						}}
						className="text-darkBrown h-full w-20 rounded-l cursor-pointer outline-none"
					>
						<span className="m-auto text-xl text-darkBrown font-roboto font-thin">
							−
						</span>
					</button>
					<input
						type="number"
						className="outline-none text-[14px] bg-transparent focus:outline-none text-center w-full font-semibold text-md focus:text-black  md:text-basecursor-default flex items-center text-darkBrown"
						name="custom-input-number"
						value={amount}
						onChange={(e) => handleChange(e)}
					></input>
					<button
						data-action="increment"
						className="text-gray-600 h-full w-20 rounded-r cursor-pointer focus:bg-brown-200"
						onClick={() => {
							increment();
							add_value_function(price);
						}}
					>
						<span className="m-auto text-xl text-darkBrown font-roboto font-thin">
							+
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default BasketItem;
