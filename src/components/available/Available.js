import React from 'react'
import Maps from "../../assets/maps.png"
export default function Available() {
  return (
    <div className="h-fit w-full">
      <div className="text-[#FCF6EE]">
        <p className="font-black text-7xl md:text-12xl lg:text-xxl">AVAILABLE</p>
      </div>
      <div className="h-1/2 w-full">
        <img src={Maps} alt="" className='mx-auto h-full'/>
      </div>
    </div>
  )
}
