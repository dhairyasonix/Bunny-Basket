import React from "react";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-50 px-20 py-8 text-lg flex items-center justify-between text-black  ">
      <div>
        <h1>logo</h1>
      </div>
      <div className=" items-center space-x-4">
        {["Home", "About", "Menu", "Contact"].map((item,index) => (
          <Link key={index}
            to="/"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>
      <div>
        <Link to={"/cart"}>
        <button className="border px-2 py-1 rounded-sm">cart</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
