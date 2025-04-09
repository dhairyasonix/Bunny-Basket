import React from 'react'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {

const {id,name,image_url,price, stars , reviews} = data
const { cart, addToCart, increment, decrement } = useCart();
const totalStars =5;
const cartItem = cart[id];
  const quantity = cartItem?.quantity || 0;
console.log(cart)

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
    <img src={image_url} alt={name} className="w-full h-36 object-cover rounded-md mb-2" />
    <h3 className="text-xl font-bold">{name}</h3>
    <div className="flex items-center">
      {[...Array(totalStars)].map(( val,index) => (
        <span
          key={index}
          className={`text-xl ${
            index < stars ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
      <p className="text-gray-500 font-semibold pl-2">({reviews} Reviews)</p>
    </div>
    <div className='flex py-2 items-center justify-between'>
    <p className="text-gray-600 text-lg font-semibold ">Rs {price}</p>
    {quantity===0 ? (<button onClick={()=>addToCart(data)} className="mt-2 mx-2 border border-gray-400 text-gray-600  px-14 py-2 rounded-md hover:bg-gray-200">Add to Cart</button>):( <div className='flex gap-6 items-center'>
      <div className="flex items-center gap-2">
      <button
        onClick={() => decrement(id)}
        className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-lg font-medium">{quantity}</span>
      <button
        onClick={() => increment(id)}
        className="bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300"
      >
        +
      </button>
    </div>
    <Link to="/cart">
    <button className='bg-gray-200 px-3 py-1 rounded text-lg hover:bg-gray-300'>Cart</button></Link>
    </div>
    )}
    
    </div>
  </div>
  )
}

export default ProductCard