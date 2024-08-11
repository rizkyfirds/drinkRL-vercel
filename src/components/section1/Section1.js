import React from "react";
import redDrink from "../../assets/red.png";
import { motion } from "framer-motion"

function Section1() {
  return (
    <div className="flex h-full">
      <div className="flex h-full m-auto text-[#FCF6EE] font-black text-7xl md:text-12xl lg:text-xxl relative z-10">
        <div className="my-auto">
          <div className="w-fit">
            <p className="relative leading-none z-10">STRONG &</p>
          </div>
          <motion.img
            src={redDrink}
            alt="botle"
            className="h-[9rem] md:h-[24rem] lg:h-[30rem] absolute top-2 md:top-10 pb-2 md:pb-16 lg:pb-9 pr-2 right-0 transform rotate-12 justify-center"
            animate={{
              scale: [1, 1.1, 1, 1.1, 1],
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 0.5, // Percepat animasi dengan durasi yang lebih singkat
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.7, 1], // Mengatur timing animasi
              repeat: Infinity, // Ulangi animasi tanpa batas
              repeatDelay: 0.1, // Berikan jeda singkat antar pengulangan
            }}
          />

          <p className="text-[#9F1835] leading-none z-10 -mt-4  md:-mt-12">POWERFULL</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
