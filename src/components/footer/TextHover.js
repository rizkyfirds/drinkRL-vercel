import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function TextHover({ text }) {
  // Membuat objek yang memetakan teks ke ikon yang sesuai
  const iconMap = {
    Instagram: FaInstagram,
    Youtube: FaYoutube,
    Twitter: FaTwitter,
  };

  // Mengecek apakah teks ada dalam objek map, jika ada, kita gunakan ikon yang sesuai
  const Icon = iconMap[text] || null;

  return (
    <p className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      {/* Jika ikon tersedia, render ikon */}
      {Icon && <Icon />}
      {!Icon && text}
    </p>
  );
}