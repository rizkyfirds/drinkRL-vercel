import React from "react";
import PerProduct from "./PerProduct";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";
import Desc from "./Desc";

export default function Product() {
  return (
    <div className="h-full">
      <div className="h-fit">
        <div className="h-fit text-[#FCF6EE]">
          <p className="font-black text-7xl md:text-9xl lg:text-12xl">
            PRODUCT
          </p>
        </div>
        <div className="h-60 md:h-[24rem] lg:h-[32rem] flex mb-10 overflow-x-auto snap-x">
          <div className="flex h-full">
            <PerProduct drink={red} text={"POWER FULL RED"} />
            <PerProduct drink={green} text={"POWER FULL GREEN"} />
            <PerProduct drink={purple} text={"POWER FULL PURPLE"} />
          </div>
        </div>
      </div>
      <div className="h-fit mt-10">
        <Desc
          title={"POWER FULL RED"}
          drink={red}
          sugar={"0.5%"}
          flavor={"STRAWBERRY"}
          flavorPercent={"0.5%"}
          soda={"0.5%"}
        />
        <Desc
          title={"FRESH GREEN"}
          drink={green}
          sugar={"0.5%"}
          flavor={"APPLE"}
          flavorPercent={"0.5%"}
          soda={"0.5%"}
        />
        <Desc
          title={"RELEXING PURPLE"}
          drink={purple}
          sugar={"0.5%"}
          flavor={"GRAPE"}
          flavorPercent={"85%"}
          soda={"0.5%"}
        />
      </div>
    </div>
  );
}
