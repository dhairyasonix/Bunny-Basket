import React from 'react'

const CustomerCard = ({data}) => {
    const {name,comment,tag,image_url} =data
  return (
    <section className="md:py-10 opacity-0 animate-fadeIn overflow-hidden ">
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center " >
             
              <div className="relative my-2 md:mx-auto mx-4">
                <img
                  src={image_url}
                  alt="Delicious Food"
                  className="h-[250px] md:h-[500px]  object-cover  rounded-lg"
                />
                
            
                <div className="absolute bottom-0 right-0 bg-white opacity-90 lg:p-4 p-2  rounded-lg shadow-xl w-48 md:w-48">
                  <h4 className="font-semibold">Customer Review Rating</h4>
                  <p className="text-yellow-500 text-lg">★★★★★</p>
                  
                </div>
                
                
              </div>
    
              
              <div className="w-[85%] mx-auto ">
                <p className="text-md md:text-lg font-semibold my-1">Testimonial</p>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:w-[80%] w-full">
                Our lovely customers love Bunny Basket!
                </h2>
                <p className="text-gray-600 mb-2 md:mb-6 min-h-[100px] ">
                  {comment}
                </p>
                <h4 className="text-gray-700 text-lg font-semibold ">{name}</h4>
                <p className="text-gray-600 mb-2 md:mb-6">{tag}</p>

              </div>
            </div>
          </div>
        </section>
  )
}

export default CustomerCard