import React from "react";
import Logo from "../../assets/logo.svg";
import { LuShoppingBag } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  return (
    <div className="h-full">
      <div className="h-full flex justify-between py-3">
        <img src={Logo} alt="Logo" className="h-full" />
        <div className="flex gap-x-7">
          <LuShoppingBag className="text-white my-auto text-xl" />
          <IoMenu className="text-white my-auto text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
