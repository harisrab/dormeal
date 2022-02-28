import react, { useState } from "react";
import ShopContext from "./ShopContext";

const ShopState = (props) => {


    const data = {
        menu: [
            {   
                id: 1,
                restaurant_id: 10,
                name: "Chicken Tikka with Chips",
                price: 43,
                description: "Delicious Chicken Tikka served with french fries and spicy mint and B.B.Q sauce."
            },
            {   
                id: 2,
                restaurant_id: 10,
                name: "Chicken Curry with Rice",
                price: 40,
                description: "Delicious Pakistani chicken curry served with rice."
            },
            {   
                id: 3,
                restaurant_id: 11,
                name: "Chicken Gyro",
                price: 40,
                description: "Classic turkish-style gyro served with flavorful sauces."
            },
        ],
        beverages: [
            {
                id: 4,
                name: "Pepsi (500 ml)",
                price: 10,
            },
            {
                id: 5,
                name: "Fanta (200 ml)",
                price: 5,
            },
            {
                id: 6,
                name: "Coke (300 ml)",
                price: 30,
            },
            {   
                id: 7,
                name: "Cola (250 ml)",
                price: 20,
            },
        ],
        cart: [
            {
                id: 1,
                quantity: 1,
                total_price: 43
            },
            {   
                id: 2,
                quantity: 1,
                total_price: 40
            },
        ],
        restaurants: [
            {
                name: "Ebeenzer's Kebab & Pizzeria",
                restaurant_id: 10
            },
            {
                name: "Big Pizza",
                restaurant_id: 11
            },
            {
                name: "Pizza Hut",
                restaurant_id: 12
            },
            {
                name: "Union Cafe",
                restaurant_id: 13
            },
            {
                name: "Subway",
                restaurant_id: 14
            }
        ],
        "service_fee": 10,
        "delivery_fee": 10,
        "Total_Bill": 83,
        user: {
            selected_restaurant: {

            },
        }
    }


    const [state, setState] = useState(data);

    const updateCart = (item_id, amount, totalPrice) => {
        data.cart.push({
            id: item_id,
            quantity: amount,
            total: totalPrice
        });

        setState(data);
    }

    const updateTotalBill = (total_bill) => {
        data["Total_Bill"] = total_bill;
        setState(data);
    }

    const updateUserRestaurant = (select_restaurant) => {
    
        data.user.selected_restaurant = select_restaurant;
        setState(data);
    
    }


    return <ShopContext.Provider value={{state, updateCart, updateTotalBill, updateUserRestaurant}}>
        {props.children}
    </ShopContext.Provider>

}

export default ShopState;