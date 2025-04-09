import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import CartPage from "./Components/CartPage";
import Home from "./Components/Home";
import Payment from "./Components/Payment";


export default function App() {
  return (
    <div className=" w-full h-screen">
      
      
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}
