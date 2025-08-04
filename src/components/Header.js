import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //reading context data
  const {logginUser} = useContext(UserContext);
  // console.log("UserContext data", logginUser);

  //reading redux store data
  const cartItems = useSelector((store)=>store.cart.items )

  return (
    <div className="flex justify-between bg-blue-100">
      <div className="logo-container w-32 ">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/2830/2830309.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-4 m-4" >Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4 m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="p-4 m-4">
            <Link to="/groceries" >Groceries</Link>
          </li>
          <button 
            className="p-4 m-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="p-4 m-4 font-bold">UserName : {logginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
