// Standard functions
import { useState, useEffect, useContext } from "react";
// Components import
import DropDownRestaurant from "../components/DropDownRestaurant";
import NavBar from "../components/NavBar";
import ContinueButton from "../components/ContinueButton";
import ShopContext from "../context/ShopContext";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";

export default function Shops() {
  const current_state = useContext(ShopContext);

  const [menuSelection, setMenuSelection] = useState(0);

  const handleRestaurantSelection = (e) => {
    current_state.updateUserRestaurant(e);
  };

  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.replace("/");
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <NavBar />
      <div className="w-screen h-full flex flex-col items-center justify-between bg-lightBrown">
        {
          (auth.currentUser) ? 
          <div className="w-screen bg-lightBrown flex-col items-center justify-between"><h1>Hello, {auth.currentUser.displayName}</h1></div>: <div></div>
        }
        <div className="py-10"></div>
        <DropDownRestaurant
          names={current_state.state["restaurants"]}
          handleRestaurantSelection={handleRestaurantSelection}
          menuSelection={menuSelection}
        />
        <div className="py-10 w-full flex justify-center">
          <ContinueButton nextpage={"menu"} text={"Table Menu"} />
        </div>
      </div>
    </div>
  );
}
