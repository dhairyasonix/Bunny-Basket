import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-8 bg-amber-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src="/assets/icons/delivery-icon.png"
            alt="Delivery Icon"
            className=" mb-4 h-12 w-12"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fastest Delivery
          </h3>
          <p className="text-gray-600">
            Enjoy quick and reliable delivery of your favorite bakery treats
            right to your doorstep.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src="/assets/icons/taste-icon.png"
            alt="Taste Icon"
            className=" mb-4 h-12 w-12"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Best Taste
          </h3>
          <p className="text-gray-600">
            Our secret recipes and premium ingredients ensure every bite is
            bursting with flavor.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition ">
          <img
            src="/assets/icons/offers-icon.png"
            alt="Offers Icon"
            className=" mb-4 h-12 w-12"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Best Offers in Town
          </h3>
          <p className="text-gray-600">
            Take advantage of our special discounts and offers, available for a
            limited time only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
