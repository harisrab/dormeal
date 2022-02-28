import React, { useContext, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MenuItem from "../components/MenuItem";
import ContinueButton from "../components/ContinueButton";
import ShopContext from "../context/ShopContext";
import { useRouter } from "next/router";
import app, { auth } from "../firebase-config";
import { getFirestore } from "firebase/firestore";

function Menu() {
  const current_state = useContext(ShopContext);

  let products = current_state.state["menu"];

  const router = useRouter();
  
  useEffect(
	() => {
		if(!auth.currentUser){
			router.replace('/');
		}
    console.log(getFirestore(app).toJSON);
	}, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-lightBrown">
      <NavBar />

      <div className="w-full h-full p-5">
        <div className="w-full h-10 my-5 bg-brown max-w-md">
          {current_state.state["user"]["selected_restaurant"].name}
        </div>
        <div>
          {products.map((product, index) => {
            if (
              current_state.state["user"]["selected_restaurant"]
                .restaurant_id === product.restaurant_id
            ) {
              return (
                <MenuItem
                  key={index}
				  item={product}
                />
              );
            } else {
              console.log(product["restaurant_id"]);
              console.log;
            }
          })}
        </div>
        <div className="py-10 w-full flex justify-center">
          <ContinueButton nextpage={"beverage"} text={"Beverages"} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
