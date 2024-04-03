import React from "react";
import red from "../../assets/red.png";
import green from "../../assets/green.png";
import purple from "../../assets/purple.png";

export default function Section2() {
  return (
    <div className="flex h-full overflow-x-auto">
      <div className="flex h-full mx-auto gap-x-10">
        <img src={red} alt="" />
        <img src={green} alt="" />
        <img src={purple} alt="" />
      </div>
    </div>
  );
}
