import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { id, name, image_url, price, stars, reviews } = data;
  const { cart, addToCart, increment, decrement } = useCart();
  const totalStars = 5;
  const cartItem = cart[id];
  const quantity = cartItem?.quantity || 0;
  console.log(cart);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <img
        src={image_url}
        alt={name}
        className="w-full h-36 object-cover rounded-md mb-2"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex items-center">
        {[...Array(totalStars)].map((val, index) => (
          <span
            key={index}
            className={`text-xl ${
              index < stars ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <p className="text-gray-500 font-semibold pl-2">({reviews} Reviews)</p>
      </div>
      <div className="flex py-2 items-center justify-between min-h-[55px] ">
        <p className="text-gray-600 text-lg font-semibold">Rs {price}</p>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(data)}
            className="mx-2 border border-[#9D4007] text-[#9D4007] px-14 py-1 rounded-md hover:bg-[#9D4007] hover:text-white shadow-sm hover:shadow-md hover:shadow-[#6B3B0A]/50 transition-all  duration-100"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex gap-4 items-center mx-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(id)}
                className="bg-white border border-[#9D4007] text-[#9D4007] px-3 py-1 rounded hover:bg-[#9D4007] hover:text-white text-lg  "
              >
                -
              </button>
              <span className="text-lg font-medium w-3 text-center">{quantity}</span>
              <button
                onClick={() => increment(id)}
                className="bg-white border border-[#9D4007] text-[#9D4007] px-3 py-1 rounded hover:bg-[#9D4007] hover:text-white text-lg "
              >
                +
              </button>
            </div>
            <Link to="/cart">
              <button className="bg-[#9D4007] text-white px-3 py-1 rounded text-lg shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50">
                Cart
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
