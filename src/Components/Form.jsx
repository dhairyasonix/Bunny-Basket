import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Form = ({toPay}) => {
const [data,setData] =useState({
name:"",
email:"",
address:"",
postalcode:"",

});
const [error,setError] = useState("")
const navigate = useNavigate()

const {name,email,address,postalcode}=data

const handleDataChange =(e,item)=>{
  setError("")
    setData((prev)=>({
        ...prev, [item]:e.target.value,
    }))

}

const validateData = () => {
    setError("");
  
    
    const nameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressWords = address.trim().split(/\s+/);
    const zipRegex = /^\d{6}$/;
  
    if (!nameRegex.test(name)) {
      setError("Please enter a valid full name (e.g., Dhairya Soni).");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
  
    if (addressWords.length < 4) {
      setError("Address should contain at least 4 words.");
      return false;
    }
  
    if (!zipRegex.test(postalcode)) {
      setError("Zip code should be exactly 6 digits.");
      return false;
    }
  
    return true; 
  };
const handleSubmit=async()=>{
    
   if(validateData()){ navigate("/payment", { state: { toPay } });}
}

  return (
    <form
    onSubmit={(e) => e.preventDefault()}
    className="px-4 md:p-14  relative mx-auto md:w-2/3 bg-white text-white rounded-lg "
  >
    <input  value={name} onChange={e=>handleDataChange(e,"name")}
      className="p-4 my-6 w-full caret-black border-2 border-[#9D4007] placeholder:text-[#9D4007]"
      type="text"
      placeholder="Full Name"
    />
    <input value={email} onChange={e=>handleDataChange(e,"email")}
      className="p-4 mb-6 w-full bg-pink-400 placeholder:text-white"
      type="text"
      placeholder="Email Address"
    />
    <input value={address} onChange={e=>handleDataChange(e,"address")}
      className="p-4 mb-6 w-full bg-pink-400 placeholder:text-white"
      type="text"
      placeholder="Address"
    />
    <input value={postalcode} onChange={e=>handleDataChange(e,"postalcode")}
      className="p-4 mb-6 w-full bg-pink-400 placeholder:text-white"
      type="number"
      placeholder="Postal code"
    />
    <button onClick={handleSubmit} className="p-4  cursor-pointer w-full bg-red-600 rounded-lg ">
      Proceed to pay
    </button>

    {error && <p className="text-xs m-1 p-2 text-red-600">{error}
    </p>}
    <p className="text-xs m-1 p-2 text-red-600">
      This is a test personal project. No user information is stored or shared!
    </p>
  </form>
  )
}

export default Form