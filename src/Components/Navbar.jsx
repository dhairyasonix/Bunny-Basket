import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-50 px-20 py-8 text-lg flex items-center justify-between text-black  bg-amber-100">
      <div>
        <h1>logo</h1>
      </div>
      <div className=" items-center space-x-4">
        {["Home", "About", "Menu", "Contact"].map((item) => (
          <a
            to="/"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
      <div>
        <button className="border px-2 py-1 rounded-sm">cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
