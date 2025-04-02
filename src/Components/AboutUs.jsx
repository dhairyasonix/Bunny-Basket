import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-amber-100">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side: Food Image with Overlays */}
          <div className="relative">
            <img
              src="/assets/images/noodles.jpg"
              alt="Delicious Food"
              className="w-full h-auto object-cover rounded-lg shadow"
            />
            {/* First overlay (e.g., Chef/Reviewer Info) */}
            <div className="absolute bottom-8 right-2 bg-white p-4 shadow rounded-lg w-48">
              <h4 className="font-semibold">Sonby Gontru</h4>
              <p className="text-yellow-500 text-lg">★★★★★</p>
              <p className="text-gray-500 text-sm">“Tastes amazing!”</p>
            </div>
            <div className="absolute top-8 right-28 bg-white p-4 shadow rounded-lg w-48">
              <h4 className="font-semibold">Customer Review Rating</h4>
              <p className="text-gray-500 text-sm">4.8/5</p>
            </div>
            
            {/* Second overlay (e.g., Customer Rating) */}
          </div>

          {/* Right side: Text Content */}
          <div className="w-[70%]">
            <p className="text-lg font-semibold my-2">About us</p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
              Health food to live a healthier life in the future
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              aliquam rerum expedita et labore doloremque saepe minima ipsa,
              numquam perferendis laboriosam soluta quae dolorem minus tempore.
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
