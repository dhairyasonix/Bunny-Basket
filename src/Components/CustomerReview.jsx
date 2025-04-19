import CustomerCard from './CustomerCard'
import CoustmerData from "../utils/coustomer.json"
import { useState } from 'react'

const CustomerReview = () => {
  const [Select,setSelect] = useState(0)
  
const handlePrev =()=>{
  setSelect(prev=>prev-1)

}
const handleNext =()=>{
  setSelect(prev=>prev+1)

}


  return (
    <div className='py-10 '>
<CustomerCard key={CoustmerData[Select].id} data={CoustmerData[Select]}/>
      <div className='flex gap-4 justify-center'>
        <button disabled={Select<1} onClick={handlePrev} className='bg-white border p-2 m-2 rounded-full items-center justify-center shadow-md  hover:shadow-lg hover:border-white hover:shadow-[#6B3B0A]/50 transition-shadow duration-300 hover:bg-[#6b3b0a] group '><img className='w-8 h-8 group-hover:invert' src="/left.png" alt="Left" /></button>
        <button disabled={Select> CoustmerData.length-2} onClick={handleNext} className='bg-white border p-2 m-2 rounded-full items-center justify-center shadow-md  hover:shadow-lg hover:shadow-[#6B3B0A]/50 transition-shadow hover:border-white duration-300 hover:bg-[#6b3b0a] group '><img className='w-8 h-8 group-hover:invert' src="/right.png" alt="Right" /></button>
      </div>
    </div>
  )
}

export default CustomerReview