import React from 'react'

const ProductCard = ({data}) => {

const {name,image_url,price, stars , reviews} = data
const totalStars =5;
console.log(stars)
console.log(data)

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
    
    <button className="mt-2 mx-2 border border-gray-400 text-gray-600  px-14 py-2 rounded-md hover:bg-gray-200">Add to Cart</button>
    </div>
  </div>
  )
}

export default ProductCard