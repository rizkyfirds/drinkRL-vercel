import React from 'react'
import Maps from "../../assets/maps.png"
export default function Available() {
  return (
    <div className="h-fit w-full">
      <div className="text-[#FCF6EE]">
        <p className="h-fit font-black text-7xl md:text-9xl lg:text-12xl">AVAILABLE</p>
      </div>
      <div className="h-40 md:h-[30rem] w-full">
        <img src={Maps} alt="" className='mx-auto h-full'/>
      </div>
    </div>
  )
}
