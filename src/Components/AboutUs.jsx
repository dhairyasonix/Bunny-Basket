import React from "react";

import cake from "../assets/images/cake_about.png"
import { Link } from "react-scroll";


const AboutUs = () => {
  return (
    <section id="About" className="pt-20 pb-10 md:py-20 ">
      <div className="container mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          <div className="relative ">
            <img
              src={cake}
              alt="Delicious Food"
              className="w-[80%] scale-150 md:scale-120  h-auto object-cover translate-x-[-30%] rounded-lg"
            />
            
            <div className="absolute top-8 right-20 bg-white opacity-90 p-4 shadow rounded-lg w-64">
              <h4 className="font-semibold">Sonby Gontru</h4>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              <p className="text-gray-500 text-sm">“Absolutely loved the pastries! The flavors were rich and authentic. Bunny Basket has become my go-to place for every celebration.”</p>
            </div>
            <div className="absolute md:bottom-16 -bottom-9 md:right-72 right-14 bg-white opacity-90 p-4 shadow rounded-lg w-48">
              <h4 className="font-semibold">Customer Review Rating</h4>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              
            </div>
            
            
          </div>

          
          <div className= "mx-auto text- w-[70%] mt-16 md:mt-0">
            <p className="text-md md:text-lg font-semibold my-2">About us</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Health food to live a healthier life in the future
            </h2>
            <p className="text-gray-600 mb-6">
            At Bunny Basket, we believe that every bite should bring joy. Our bakery crafts wholesome treats using premium ingredients, blending tradition with creativity. From artisan breads to custom cakes, every item is baked with care and love.
            </p>
            <Link to="Story" smooth={true}
              offset={60}
              duration={500}><button className="bg-[#9D4007] text-white px-6 py-2 rounded-md hover:bg-[#622804] shadow-sm  hover:shadow-lg hover:shadow-[#6B3B0A]/50 transition-all duration-200">
              Explore Our Story
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
