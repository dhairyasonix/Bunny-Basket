import React from 'react'
import { useCart } from '../context/CartContext';

export const CartItems = ({item}) => {
const { increment, decrement } = useCart();
if(!item)return;
    const {id,name,price,quantity} = item

  return (
    <div className="flex justify-between m-2 items-center">
  <h1 className='w-[200px] border text-xl'>{name} </h1>

  
  <div> 
  <div className='flex gap-6 items-center'>
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
    
    </div>
    
    
     </div>

    <span className='mx-4'>{price}RS</span> 
</div>
  )
}
