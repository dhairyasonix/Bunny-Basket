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
    <div className='py-10 bg-amber-100'>
<CustomerCard data={CoustmerData[Select]}/>
      <div className='flex  justify-center'>
        <button disabled={Select<1} onClick={handlePrev} className='border p-2 m-2 rounded-full'>◀</button>
        <button disabled={Select> CoustmerData.length-2} onClick={handleNext} className='border p-2 m-2 rounded-full'>▶</button>
      </div>
    </div>
  )
}

export default CustomerReview