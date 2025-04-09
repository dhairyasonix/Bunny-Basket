import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center px-20 pt-14 '>
        <div className='items-center flex flex-col justify-center'>
<img className='w-40' src="/shopping.png" alt="shopping" />
<h4 className='font-bold text-xl'>Your cart is empty</h4>
 <p className='my-2'>You can go to home page to view more bakes</p>
<Link to="/">
 <button className="bg-orange-500 text-xl font-bold text-white my-2 px-12 py-2 rounded-sm hover:bg-orange-600 items-center"
            >
              Visit Home
            </button> 
            </Link> 
            </div>
  </div>
  )
}
