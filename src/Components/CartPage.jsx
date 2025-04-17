import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";
import Coupon from "./Coupon";

const CartPage = () => {
const [showCoupon,setShowCoupon] = useState(false)
const [discount, setDiscount] = useState(0);

  const validCoupons = {
    "BAKERY10": 10, // 
    "BAKERY30": 30, // 
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

  const handleCoupon =()=>{
    setDiscount(0);
    setShowCoupon(false)
  }

  return (
    <div className=" grid grid-cols-3 w-full h-screen px-20 pt-24 pb-2 gap-4">
      <div className="col-span-2 w-full ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-14  relative mx-auto w-2/3 bg-amber-100 text-white rounded-lg "
        >
          <input
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-4 my-2  w-full bg-gray-800"
            type="text"
            placeholder="Address"
          />
          <input
            className="p-4 my-2  w-full bg-gray-800"
            type="number"
            placeholder="Postal code"
          />
          <button className="p-4   w-full bg-red-600 rounded-lg ">
            Proceed to pay
          </button>
          <p className="text-xs m-1 p-2 text-red-600">
            This is a personal project. No user information is stored or shared!
          </p>
        </form>
      </div>
      <div className="col-span-1 w-full h-full px-6  relative rounded-lg bg-amber-100">
  
  <div className="h-[100px] border my-4"></div>


  <div className="w-full border max-h-[440px] overflow-y-scroll ">
    {Object.values(cart).map((item) => (
      <div key={item.id}>
        <CartItems item={item} />
      </div>
    ))}
    <div>
{discount<=0 &&(showCoupon === false ?<button onClick={()=>setShowCoupon(true)}>Apply Coupon</button> :  <Coupon validCoupons={validCoupons} setDiscount={setDiscount}/>)}
{discount > 0 && (
  <div className="flex justify-between items-center">
    <span>Coupon Applied: {Object.keys(validCoupons).find(key => validCoupons[key] === discount)}</span>
    <button onClick={handleCoupon}>🚮</button>
  </div>
)}
    
    </div>
   
   
<div>
  <h3>Bill Details</h3>
  <div className="flex justify-between"> 
    <span>Item total</span> <span>{total}</span>
  </div>
 {discount>0 && <div className="flex justify-between"> 
    <span>Cuppon applied</span> <span>-{discountAmount}</span>
  </div>}
  <div className="flex justify-between"> 
    <span>Delivery Fee | 2.4 kms</span> <span>{deliveryCharge}</span>
  </div>
</div>

  </div>

  
  <div className="absolute bottom-0 left-0 right-0  border-t p-4 flex items-center justify-between">
    <h1 className="text-lg font-bold">TO PAY</h1>
    <span className="text-lg font-semibold">{toPay}</span>
  </div>
</div>
      
    </div>
  );
};

export default CartPage;
