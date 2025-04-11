import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const EmptyCart = () => {
  const navigate = useNavigate()

  const handleMenu =()=>{
    navigate("/#Menu");
  }
  return (
    <div className='w-full h-screen flex items-center justify-center px-20 pt-14 '>
        <div className='items-center flex flex-col justify-center'>
<img className='w-40' src="/shopping.png" alt="shopping" />
<h4 className='font-bold text-xl'>Your cart is empty</h4>
 <p className='my-2'>You can go to menu page to view more bakes</p>

 <button onClick={handleMenu} className="bg-orange-500 text-xl font-bold text-white my-2 px-12 py-2 rounded-sm hover:bg-orange-600 items-center"
            >
              Menu
            </button> 
             
            </div>
  </div>
  )
}
