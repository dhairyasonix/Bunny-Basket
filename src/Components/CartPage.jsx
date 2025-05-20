import { useRef, useEffect, useState } from "react";

import { useCart } from "../Context/CartContext";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";
import Coupon from "./Coupon";
import Form from "./Form";

const CartPage = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [discount, setDiscount] = useState(0);
  const cartScrollRef = useRef(null);

useEffect(() => {
  window.scrollTo(0, 0);
  if (cartScrollRef.current) {
    cartScrollRef.current.scrollTop = cartScrollRef.current.scrollHeight;
  }
}, []); // Run this every time cart updates



  const validCoupons = {
    BAKERY10: 10, //
    BAKERY30: 30, //
  };

 

  const { cart } = useCart();

  if (Object.values(cart).length === 0) {
    return <EmptyCart />;
  }

  const getTotal = () => {
    return Object.values(cart).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };
  const getBreakdown = () => {
    const total = getTotal();
    const discountAmount = (total * discount) / 100;
    const deliveryCharge = 20;
    const toPay = Math.round(total - discountAmount + deliveryCharge);
    return { total, discountAmount, deliveryCharge, toPay };
  };
  const { total, discountAmount, deliveryCharge, toPay } = getBreakdown();

  const handleCoupon = () => {
    setDiscount(0);
    setShowCoupon(false);
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-screen  md:px-20 md:pt-24 pb-4 bg-[#E8EEEA]">
      <div className="order-2  md:order-1 col-span-2 w-full">
       <Form toPay={toPay}/>
      </div>
      <div id="cart" className="order-1 md:order2 col-span-1 w-full h-auto md:h-full md:px-6 px-4 relative rounded-lg bg-white">
        <div className="h-[70px] md:h-[100px] my-4 py-2">
          <img className="h-full hidden md:block" src="./Bunny_basket.png" alt="logo" />
        </div>

        <div ref={cartScrollRef} className="w-full border max-h-[300px] md:max-h-[430px] overflow-y-scroll ">
          {Object.values(cart).map((item) => (
            <div key={item.id}>
              <CartItems item={item} />
            </div>
          ))}
          <div className="px-2 pt-4">
            {discount <= 0 &&
              (showCoupon === false ? (
                <button className="border border-dashed w-full px-2 py-3 text-md font-semibold cursor-pointer hover:shadow-md hover:text-[#6b3b0a]" onClick={() => setShowCoupon(true)}>
                  Apply Coupon
                </button>
              ) : (
                <Coupon validCoupons={validCoupons} setDiscount={setDiscount} />
              ))}
            {discount > 0 && (<div className="flex justify-between border border-dashed hover:shadow-md mb-2 py-2 px-3">
          <div>
                        <h4 className="text-md font-semibold  ">{Object.keys(validCoupons).find(
                    (key) => validCoupons[key] === discount
                  )}</h4>
            <h4 className="text-xs font-medium text-gray-400 ">
            Offer applied on the bill
            </h4>
          </div>
          <button
            className="text-md font-semibold cursor-pointer hover:text-[#6b3b0a] "
            onClick={handleCoupon}
          >
            REMOVE
          </button>
        </div>
            )}
          </div>

          <div className="p-2">
            <h3 className="text-md font-semibold">Bill Details</h3>
            <div className="flex justify-between text-md ">
              <span>Item total</span> <span>₹{total}</span>
            </div>
            <div className="flex justify-between  text-md ">
              <span>Delivery Fee | 2.4 kms</span> <span>₹{deliveryCharge}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-md text-pink-500">
                <span>Cuppon applied</span> <span>-₹{discountAmount}</span>
              </div>
            )}
            
          </div>
        </div>

        <div className="md:absolute bottom-0 left-0 right-0 my-4 md:my-0 border-t md:mx-4 p-4 flex items-center justify-between">
          <h1 className="text-md font-bold">TO PAY</h1>
          <span className="text-md font-bold">₹{toPay}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
