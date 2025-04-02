import React from "react";

const LandingPage = () => {
  return (
    <div className=" w-full h-screen text-black pt-1  bg-amber-100">
      <div className="flex mt-36 px-20">
        <div className="w-1/2 m-2 pt-10">
          <p className="font-semibold text-lg my-5">
            Get 25% off on yout first Order
          </p>
          <h1 className="text-6xl">Wellcome to our</h1>
          <h1 className="text-6xl font-semibold leading-none">Bunny Basket</h1>
          <p className="text-lg w-[30vw] mt-2">
            Indulge in the warmth of freshly baked breads, pastries, and
            desserts made with love. At Bunny Basket, we bring you artisanal
            treats crafted from the finest ingredients each bite a little piece
            of heaven.
          </p>
          <button className="border px-4 py-1 my-5 rounded-sm">
            Order Now
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
