import React from "react";
import Logo from "../../assets/logo.svg";
import TextHover from "./TextHover";

export default function Footer() {
  return (
    <div className="h-full flex justify-between mb-4 lg:mx-10 gap-x-10">
      <div className="w-1/6">
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-x-16 w-5/6 justify-end">
        <div className="text-[#FCF6EE] text-xl md:text-3xl">
          <TextHover text={"About"} />
          <TextHover text={"Company"} />
          <TextHover text={"Product"} />
          <TextHover text={"Seller"} />
        </div>
        <div className="text-[#FCF6EE] text-xl md:text-3xl">
          <p className="text-2xl md:text-4xl font-bold">Contact :</p>
          <TextHover text={"Email"} />
          <TextHover text={"Phone: 0000000"} />
          <div className="flex gap-x-5">
            <TextHover text={"Instagram"} />
            <TextHover text={"Youtube"} />
            <TextHover text={"Twitter"} />
          </div>
        </div>
      </div>
    </div>
  );
}
