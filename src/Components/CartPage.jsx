import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";

const CartPage = () => {
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
  console.log();
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


  <div className="w-full border overflow-y-scroll ">
    {Object.values(cart).map((item) => (
      <div key={item.id}>
        <CartItems item={item} />
      </div>
    ))}
  </div>

  
  <div className="absolute bottom-0 left-0 right-0  border-t p-4 flex items-center justify-between">
    <h1 className="text-lg font-bold">Item Total</h1>
    <span className="text-lg font-semibold">{getTotal()}</span>
  </div>
</div>
      
    </div>
  );
};

export default CartPage;
