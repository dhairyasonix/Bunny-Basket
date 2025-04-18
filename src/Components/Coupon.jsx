import React from "react";

const Coupon = ({ validCoupons, setDiscount }) => {
  return (
    <div className="">
      {Object.keys(validCoupons).map((item) => (
        <div className="flex justify-between border my-2 py-2 px-3">
          <div>
                        <h4 className="text-md font-semibold  ">{item}</h4>
            <h4 className="text-xs font-medium text-gray-400 ">
              Get Flat {validCoupons[item]}% off
            </h4>
          </div>
          <button
            className="text-md font-semibold"
            onClick={() => setDiscount(validCoupons[item])}
          >
            APPLY COUPON
          </button>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
