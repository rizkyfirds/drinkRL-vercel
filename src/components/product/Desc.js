import React from "react";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function Desc({
  drink,
  title,
  sugar,
  flavor,
  flavorPercent,
  soda,
}) {
  return (
    <div
      className={`h-[300px] lg:h-[500px] w-full my-10 flex ${
        drink === red
          ? "bg-[#9F1835]"
          : drink === green
          ? "bg-[#B2D24A]"
          : drink === purple
          ? "bg-[#9935D7]"
          : ""
      }`}
    >
      <div className="w-1/2 lg:w-2/3 text-[#FCF6EE] m-auto mx-5 lg:mx-10">
        <p className="text-4xl md:text-6xl lg:text-9xl">{title}</p>
        <div className="justify-between text-2xl md:text-3xl flex border-b-4">
          <p>SUGAR</p>
          <p>{sugar}</p>
        </div>

        <div className="justify-between text-2xl md:text-3xl flex border-b-4">
          <p>{flavor}</p>
          <p>{flavorPercent}</p>
        </div>
        <div className="justify-between text-2xl md:text-3xl flex border-b-4">
          <p>SODA</p>
          <p>{soda}</p>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/3 h-full flex ">
        <img src={drink} alt="" className="my-auto h-2/3 lg:h-full mx-auto py-5 lg:py-20 rotate-12 transition-transform duration-500 transform hover:rotate-0 hover:scale-105" />
      </div>
    </div>
  );
}
