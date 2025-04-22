import React from "react";
import Spline from "@splinetool/react-spline";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <div id="Home" className=" w-full text-black pt-1">
      <div className="absolute top-0 w-full overflow-hidden">
        <Spline
          className="h-screen"
          scene="https://prod.spline.design/95aW0RVi-IxLNYp7/scene.splinecode"
          scroll-behavior="none"
        />
      </div>
      <div className="my-36 px-20">
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
        <Link to="Menu" offset={10}
              duration={500}><button className="bg-[#9D4007] text-white hover:bg-[#622804] shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50 transition-all duration-200  px-6 py-2 relative my-5 rounded-sm z-[999]">
            Order Now
          </button></Link> 
        </div>
        
      </div>

    </div>
  );
};

export default LandingPage;
