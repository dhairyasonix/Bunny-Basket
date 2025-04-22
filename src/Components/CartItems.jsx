import React from "react";
import { useCart } from "../Context/CartContext";

export const CartItems = ({ item }) => {
  const { increment, decrement } = useCart();
  if (!item) return;
  const { id, name, price, quantity } = item;

  return (
    <div className="flex justify-between mx-2 my-2 items-center">
      <h1 className="w-[200px] text-lg ">{name} </h1>

      <div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrement(id)}
              className="bg-white border border-[#9D4007] text-[#9D4007] px-3 py-1 rounded cursor-pointer hover:bg-[#9D4007] hover:text-white text-lg"
            >
              -
            </button>
            <span className="text-lg font-medium w-2">{quantity}</span>
            <button
              onClick={() => increment(id)}
              className="bg-white border border-[#9D4007] text-[#9D4007] px-3 py-1 rounded cursor-pointer hover:bg-[#9D4007] hover:text-white text-lg "
            >
              +
            </button>
          </div>
        </div>
      </div>

      <span className="w-12">₹{price}</span>
    </div>
  );
};
