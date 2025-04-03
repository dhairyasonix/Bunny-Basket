import React from 'react'
import rajeev from "../assets/images/Mike.png"

const BakingExperts = () => {
  return (
    <div className='flex flex-col px-20 py-[20vh] items-center text-center bg-amber-100'>
       <div className='w-1/2 '>
       <p className="text-lg font-semibold my-2">Our Chef</p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet our awesome Chefs
            </h2>
            <p className="text-gray-600 mb-6">
            Behind every loaf and pastry is a passionate team of bakers, each dedicated to bringing you fresh and innovative creations. From traditional favorites to modern twists, our experts pour their hearts (and years of experience) into every recipe.empore.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
         </div> 
         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-6  bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src={rajeev}
            alt="Mike"
            className=" "
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Rajeev
          </h3>
         
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src="../assets/images/Nikita.png"
            alt="Nikita"
            className=" mb-4 h-12 w-12"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Nikita
          </h3>
         
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src="/assets/icons/offers-icon.png"
            alt="Prachi"
            className=" mb-4 h-12 w-12"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Prachi
          </h3>
          
        </div>
      </div>
    </div>
  )
}

export default BakingExperts