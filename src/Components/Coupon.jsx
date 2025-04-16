import React from 'react'

const Coupon = ({validCoupons}) => {
  return (
    <div>{Object.keys(validCoupons).map((item)=>(
      
        
        <div className="flex justify-between"> 
       <div> <h4>Get Flat {validCoupons[item]}% off</h4>
       <h4>{item}</h4>
       </div> <button>APPLY COUPON</button></div>))} </div>
  )
}

export default Coupon