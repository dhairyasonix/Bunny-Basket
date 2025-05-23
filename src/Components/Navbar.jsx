import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const isCartPage = location.pathname === "/cart";

  const handleNavigate = () => {
    if (isCartPage) {
      navigate("/");
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll < lastScroll || currentScroll < 15);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed w-full z-50 px-4 md:px-20 py-6 text-lg flex items-center justify-between text-black transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <img className="w-20 md:w-36 " src="/Bunny_basket.png" alt="logo" />
      </div>
      {!isCartPage && (
        <div className="md:w-fit flex flex-row  w-[45%] items-center space-x-2 md:space-x-6">
          {["Home", "About", "Menu", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item}
              className={` ${item === "About"? "hidden md:block ":"block "}text-gray-600 hover:text-gray-800 cursor-pointer`}
              smooth={true}
              offset={30}
              duration={500}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
      <div>
        <button
          onClick={handleNavigate}
          className="relative ml-6 py-1 px-2 md:px-6 text-black text-lg  nded-full  overflow-hidden bg-white rounded-sm transition-all duration-400 ease-in-out shadow-sm hover:scale-105 hover:text-white hover:shadow-md hover:shadow-[#6B3B0A]/50 active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#622804] before:to-[#9D4007] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-sm hover:before:left-0"
        >
          {isCartPage ? "Home" : "Cart"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
