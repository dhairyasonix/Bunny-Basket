import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "../Context/CartContext";

const Body = () => {
  return (
    <div className="">
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Body;
