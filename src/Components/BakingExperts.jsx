import React from "react";

const BakingExperts = () => {
  return (
    <div className="flex flex-col px-20 py-[15vh] items-center text-center ">
      <div className="w-1/2 ">
        <p className="text-lg font-semibold my-2">Our Chef</p>
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet our awesome Chefs
        </h2>
        <p className="text-gray-600 mb-6">
          Behind every loaf and pastry is a passionate team of bakers, each
          dedicated to bringing you fresh and innovative creations. From
          traditional favorites to modern twists, our experts pour their hearts
          (and years of experience) into every recipe.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
       
      <div className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img src="/Nikita.png" alt="Nikita" className=" " />
          <h3 className="text-xl font-semibold text-gray-800 my-2">Nikita Sharma</h3>
        </div>
        <div className="p-2  bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img src="/Mike.png" alt="Mike" className=" " />
          <h3 className="text-xl font-semibold text-gray-800 my-2">Mike Johnson</h3>
        </div>

        

        <div className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img src="/Oliva.png" alt="Oliva" className="" />
          <h3 className="text-xl font-semibold text-gray-800 my-2">Oliva Miller</h3>
        </div>
      </div>
    </div>
  );
};

export default BakingExperts;
