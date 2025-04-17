import React from 'react'

const Coupon = ({validCoupons,setDiscount}) => {
    
  return (
    <div className=''>{Object.keys(validCoupons).map((item)=>(
      
        
        <div className="flex justify-between border m-2"> 
       <div> <h4>Get Flat {validCoupons[item]}% off</h4>
       <h4>{item}</h4>
       </div> <button onClick={()=>setDiscount(validCoupons[item])}>APPLY COUPON</button></div>))} </div>
  )
}

export default Coupon