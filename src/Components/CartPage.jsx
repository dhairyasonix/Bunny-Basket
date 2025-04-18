import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";
import Coupon from "./Coupon";
import Form from "./Form";

const CartPage = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [discount, setDiscount] = useState(0);


  const validCoupons = {
    BAKERY10: 10, //
    BAKERY30: 30, //
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className=" grid grid-cols-3 w-full h-screen px-20 pt-24 pb-4 gap-4">
      <div className="col-span-2 w-full ">
       <Form toPay={toPay}/>
      </div>
      <div className="col-span-1 w-full h-full px-6  relative rounded-lg bg-amber-100">
        <div className="h-[100px] border my-4"></div>

        <div className="w-full border max-h-[440px] overflow-y-scroll ">
          {Object.values(cart).map((item) => (
            <div key={item.id}>
              <CartItems item={item} />
            </div>
          ))}
          <div className="px-2 pt-4">
            {discount <= 0 &&
              (showCoupon === false ? (
                <button className="border w-full p-2 text-md font-semibold" onClick={() => setShowCoupon(true)}>
                  Apply Coupon
                </button>
              ) : (
                <Coupon validCoupons={validCoupons} setDiscount={setDiscount} />
              ))}
            {discount > 0 && (<div className="flex justify-between border my-2 py-2 px-3">
          <div>
                        <h4 className="text-md font-semibold  ">{Object.keys(validCoupons).find(
                    (key) => validCoupons[key] === discount
                  )}</h4>
            <h4 className="text-xs font-medium text-gray-400 ">
            Offer applied on the bill
            </h4>
          </div>
          <button
            className="text-md font-semibold"
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
              <span>Item total</span> <span>{total}</span>
            </div>
            <div className="flex justify-between  text-md ">
              <span>Delivery Fee | 2.4 kms</span> <span>{deliveryCharge}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-md ">
                <span>Cuppon applied</span> <span>-{discountAmount}</span>
              </div>
            )}
            
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0  border-t p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">TO PAY</h1>
          <span className="text-lg font-bold">{toPay}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
