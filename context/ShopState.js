import react from "react";
import ShopContext from "./ShopContext";

const ShopState = (props) => {

    const State = {
        menu: [
            {
                name: "Chicken Tikka with Chips",
                price: 43,
                description: "Delicious Chicken Tikka served with french fries and spicy mint and B.B.Q sauce."
            },
            {
                name: "Chicken Curry with Rice",
                price: 40,
                description: "Delicious Pakistani chicken curry served with rice."
            },
            {
                name: "Chicken Gyro",
                price: 40,
                description: "Classic turkish-style gyro served with flavorful sauces."
            },
        ],
        "service_fee": 10,
        "delivery_fee": 10,
    }

    return <ShopContext.Provider value={State}>
        {props.children}
    </ShopContext.Provider>

}

export default ShopState;