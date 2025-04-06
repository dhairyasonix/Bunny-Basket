import React from "react";

import cake from "../assets/images/cake_about.png"


const AboutUs = () => {
  return (
    <section className="py-12 bg-amber-100">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          <div className="relative ">
            <img
              src={cake}
              alt="Delicious Food"
              className="w-[80%] scale-120  h-auto object-cover translate-x-[-30%] rounded-lg"
            />
            
            <div className="absolute top-8 right-20 bg-white opacity-90 p-4 shadow rounded-lg w-64">
              <h4 className="font-semibold">Sonby Gontru</h4>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              <p className="text-gray-500 text-sm">“Absolutely loved the pastries! The flavors were rich and authentic. Bunny Basket has become my go-to place for every celebration.”</p>
            </div>
            <div className="absolute bottom-16 right-72 bg-white opacity-90 p-4 shadow rounded-lg w-48">
              <h4 className="font-semibold">Customer Review Rating</h4>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              
            </div>
            
            
          </div>

          
          <div className="w-[70%]">
            <p className="text-lg font-semibold my-2">About us</p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
              Health food to live a healthier life in the future
            </h2>
            <p className="text-gray-600 mb-6">
            At Bunny Basket, we believe that every bite should bring joy. Our bakery crafts wholesome treats using premium ingredients, blending tradition with creativity. From artisan breads to custom cakes, every item is baked with care and love.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
              Explore Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
