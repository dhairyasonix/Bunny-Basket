import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";


const Body = () => {
  return (
    <div>
       <CartProvider>
        <Navbar/>
        <Outlet/>
    <Footer/>
    </CartProvider>
    </div>
  )
}

export default Body