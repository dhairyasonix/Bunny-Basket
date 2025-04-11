import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const isCartPage = location.pathname === "/cart";

  const handleNavigate = () => {
if(isCartPage){
  navigate("/")
}else {
  navigate("/cart")

  };}

  return (
    <nav className="w-full fixed z-50 px-20 py-8 text-lg flex items-center justify-between text-black  ">
      <div>
        <h1>logo</h1>
      </div>
      {!isCartPage && <div className=" items-center space-x-4">
        {["Home", "About", "Menu", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={item}
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            smooth={true}
            offset={30}
            duration={500}
          >
            {item}
          </Link>
        ))}
      </div>}
      <div>
        <button
          className="border px-2 py-1 rounded-sm cursor-pointer"
          onClick={handleNavigate}
        >
          {isCartPage ? "Home" : "Cart"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
