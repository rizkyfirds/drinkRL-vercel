import React from "react";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function PerProduct({ drink, text }) {
  return (
    <div className={`h-full w-[20rem] md:w-[50rem] snap-start`}>
      <div className="relative flex h-full overflow-hidden">
        <div
          className={`absolute h-5/6 w-full ${
            drink === red
              ? "bg-[#9F1835]"
              : drink === green
              ? "bg-[#B2D24A]"
              : drink === purple
              ? "bg-[#9935D7]"
              : ""
          }`}
        ></div>
        <div className="flex w-1/2 z-10 h-full">
          <div className="mx-auto relative z-10">
            <img src={drink} alt="" className="h-full" />
          </div>
        </div>
        <div className="w-1/3 lg:w-1/2 relative mt-10 md:mt-2 mx-10">
          <p className="text-4xl md:text-6xl lg:text-8xl leading-none text-[#FCF6EE]">
            {text}
          </p>
          <div className="w-fit bg-[#FCF6EE] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <button
              className={`text-xl md:text-4xl leading-none px-2 pt-2 ${
                drink === red
                  ? "text-[#9F1835]"
                  : drink === green
                  ? "text-[#B2D24A]"
                  : drink === purple
                  ? "text-[#9935D7]"
                  : ""
              }`}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
